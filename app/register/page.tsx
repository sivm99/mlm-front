"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRegister } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authApi } from "@/lib/api";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form validation schema
const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    mobile: z.string().min(6, "Valid phone number is required"),
    email: z.string().email("Invalid email address"),
    country: z.string(),
    dialCode: z.string(),
    position: z.enum(["LEFT", "RIGHT"]),
    sponsor: z.string().length(10),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    otp: z.string().min(4, "OTP must be at least 4 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const sponsorCode = searchParams.get("sponsor") || "";
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [sponsorName, setSponsorName] = useState("");
  const [isFetchingSponsor, setIsFetchingSponsor] = useState(false);

  const register = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      country: "",
      dialCode: "1",
      position: "LEFT" as "LEFT" | "RIGHT",
      sponsor: sponsorCode,
      password: "",
      confirmPassword: "",
      otp: "",
    },
  });

  const watchedEmail = watch("email");
  const watchedSponsor = watch("sponsor");

  // Fetch sponsor name when sponsor code changes
  useEffect(() => {
    const fetchSponsorName = async () => {
      if (watchedSponsor && watchedSponsor.length === 10) {
        try {
          setIsFetchingSponsor(true);
          const response = await authApi.regerterGetSponserName(watchedSponsor);
          if (response.data.success && response.data.data) {
            setSponsorName(response.data.data);
          } else {
            setSponsorName("");
            toast({
              title: "Invalid sponsor",
              description: "Could not find sponsor with this code",
              variant: "destructive",
            });
          }
        } catch (error) {
          setSponsorName("");
          toast({
            title: "Error",
            description: "Failed to fetch sponsor information",
            variant: "destructive",
          });
        } finally {
          setIsFetchingSponsor(false);
        }
      } else {
        setSponsorName("");
      }
    };

    fetchSponsorName();
  }, [watchedSponsor]);

  const handleSendOtp = async () => {
    const isEmailValid = await trigger("email");

    if (!isEmailValid) return;

    try {
      setOtpLoading(true);
      await authApi.registerOtp(watchedEmail);
      setOtpSent(true);
      toast({
        title: "OTP Sent",
        description: "Check your email for the verification code",
      });
    } catch (error) {
      toast({
        title: "Failed to send OTP",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setOtpLoading(false);
    }
  };

  const onSubmit = (data: RegisterFormValues) => {
    if (!otpSent) {
      toast({
        title: "Verification required",
        description: "Please verify your email with OTP first",
        variant: "destructive",
      });
      return;
    }

    const registerData = {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      dialCode: data.dialCode,
      position: data.position,
      sponsor: data.sponsor,
      password: data.password,
      otp: data.otp,
      country: data.country,
    };

    register.mutate(registerData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-primary">Al</span>Primus
            </div>
          </div>
          <CardTitle className="text-2xl text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details to create an account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input id="name" placeholder="John Doe" {...field} />
                )}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="flex-grow"
                      {...field}
                    />
                  )}
                />
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpLoading || otpSent}
                  size="sm"
                >
                  {otpLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : otpSent ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
              {otpSent && (
                <p className="text-sm text-green-500">OTP sent to your email</p>
              )}
            </div>

            {otpSent && (
              <div className="space-y-2">
                <Label htmlFor="otp">OTP Code</Label>
                <Controller
                  name="otp"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="otp"
                      placeholder="Enter OTP from email"
                      {...field}
                    />
                  )}
                />
                {errors.otp && (
                  <p className="text-sm text-red-500">{errors.otp.message}</p>
                )}
              </div>
            )}

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Afghanistan">Afghanistan</SelectItem>
                        <SelectItem value="Åland Islands">
                          Åland Islands
                        </SelectItem>
                        <SelectItem value="Albania">Albania</SelectItem>
                        <SelectItem value="Algeria">Algeria</SelectItem>
                        <SelectItem value="American Samoa">
                          American Samoa
                        </SelectItem>
                        <SelectItem value="Andorra">Andorra</SelectItem>
                        <SelectItem value="Angola">Angola</SelectItem>
                        <SelectItem value="Anguilla">Anguilla</SelectItem>
                        <SelectItem value="Antarctica">Antarctica</SelectItem>
                        <SelectItem value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </SelectItem>
                        <SelectItem value="Argentina">Argentina</SelectItem>
                        <SelectItem value="Armenia">Armenia</SelectItem>
                        <SelectItem value="Aruba">Aruba</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="Austria">Austria</SelectItem>
                        <SelectItem value="Azerbaijan">Azerbaijan</SelectItem>
                        <SelectItem value="Bahamas">Bahamas</SelectItem>
                        <SelectItem value="Bahrain">Bahrain</SelectItem>
                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="Barbados">Barbados</SelectItem>
                        <SelectItem value="Belarus">Belarus</SelectItem>
                        <SelectItem value="Belgium">Belgium</SelectItem>
                        <SelectItem value="Belize">Belize</SelectItem>
                        <SelectItem value="Benin">Benin</SelectItem>
                        <SelectItem value="Bermuda">Bermuda</SelectItem>
                        <SelectItem value="Bhutan">Bhutan</SelectItem>
                        <SelectItem value="Bolivia">Bolivia</SelectItem>
                        <SelectItem value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </SelectItem>
                        <SelectItem value="Botswana">Botswana</SelectItem>
                        <SelectItem value="Bouvet Island">
                          Bouvet Island
                        </SelectItem>
                        <SelectItem value="Brazil">Brazil</SelectItem>
                        <SelectItem value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </SelectItem>
                        <SelectItem value="Brunei Darussalam">
                          Brunei Darussalam
                        </SelectItem>
                        <SelectItem value="Bulgaria">Bulgaria</SelectItem>
                        <SelectItem value="Burkina Faso">
                          Burkina Faso
                        </SelectItem>
                        <SelectItem value="Burundi">Burundi</SelectItem>
                        <SelectItem value="Cambodia">Cambodia</SelectItem>
                        <SelectItem value="Cameroon">Cameroon</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="Cape Verde">Cape Verde</SelectItem>
                        <SelectItem value="Cayman Islands">
                          Cayman Islands
                        </SelectItem>
                        <SelectItem value="Central African Republic">
                          Central African Republic
                        </SelectItem>
                        <SelectItem value="Chad">Chad</SelectItem>
                        <SelectItem value="Chile">Chile</SelectItem>
                        <SelectItem value="China">China</SelectItem>
                        <SelectItem value="Christmas Island">
                          Christmas Island
                        </SelectItem>
                        <SelectItem value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </SelectItem>
                        <SelectItem value="Colombia">Colombia</SelectItem>
                        <SelectItem value="Comoros">Comoros</SelectItem>
                        <SelectItem value="Congo">Congo</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="United States">
                          United States
                        </SelectItem>
                        {/* More countries would be listed here */}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.country && (
                  <p className="text-sm text-red-500">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="dialCode">Dial Code</Label>
                <Controller
                  name="dialCode"
                  control={control}
                  render={({ field }) => (
                    <Input id="dialCode" placeholder="1" {...field} />
                  )}
                />
                {errors.dialCode && (
                  <p className="text-sm text-red-500">
                    {errors.dialCode.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Controller
                  name="mobile"
                  control={control}
                  render={({ field }) => (
                    <Input id="mobile" placeholder="1234567890" {...field} />
                  )}
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sponsor">Sponsor Code</Label>
              <Controller
                name="sponsor"
                control={control}
                render={({ field }) => (
                  <Input
                    id="sponsor"
                    placeholder="AL12345678"
                    {...field}
                    maxLength={10}
                  />
                )}
              />
              {isFetchingSponsor && (
                <p className="text-sm text-gray-500">Checking sponsor...</p>
              )}
              {sponsorName && !isFetchingSponsor && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700">
                    Sponsor: {sponsorName}
                  </AlertDescription>
                </Alert>
              )}
              {errors.sponsor && (
                <p className="text-sm text-red-500">{errors.sponsor.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Position</Label>
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="LEFT" id="left" />
                      <Label htmlFor="left">Left</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="RIGHT" id="right" />
                      <Label htmlFor="right">Right</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input id="password" type="password" {...field} />
                )}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input id="confirmPassword" type="password" {...field} />
                )}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full"
              disabled={register.isPending || !otpSent}
            >
              {register.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
