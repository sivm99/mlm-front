"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { authApi, userApi } from "./api"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

// Auth hooks
export function useLogin() {
  const router = useRouter()
  const { toast } = useToast()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
      toast({
        title: "Login successful",
        description: "You have been logged in successfully",
      })
      router.push("/dashboard")
    },
    onError: (error: any) => {
      toast({
        title: "Login failed",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      })
    },
  })
}

export function useRegister() {
  const router = useRouter()
  const { toast } = useToast()

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast({
        title: "Registration successful",
        description: "Please activate your account to continue",
      })
      router.push("/login")
    },
    onError: (error: any) => {
      toast({
        title: "Registration failed",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      })
    },
  })
}

export function useForgotPassword() {
  const { toast } = useToast()

  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      toast({
        title: "Email sent",
        description: "Check your email for password reset instructions",
      })
    },
    onError: (error: any) => {
      toast({
        title: "Request failed",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      })
    },
  })
}

export function useResetPassword() {
  const router = useRouter()
  const { toast } = useToast()

  return useMutation({
    mutationFn: authApi.resetPassword,
    onSuccess: () => {
      toast({
        title: "Password reset successful",
        description: "You can now login with your new password",
      })
      router.push("/login")
    },
    onError: (error: any) => {
      toast({
        title: "Reset failed",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      })
    },
  })
}

export function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.clear()
      toast({
        title: "Logout successful",
        description: "You have been logged out successfully",
      })
      router.push("/")
    },
  })
}

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await authApi.me()
      return response.data
    },
    retry: false,
  })
}

// MLM Tree hooks
export function useMLMTree() {
  return useQuery({
    queryKey: ["mlm-tree"],
    queryFn: async () => {
      const response = await userApi.getTree()
      return response.data
    },
  })
}

export function useCreateReferralLink() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: userApi.createReferralLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["referral-links"] })
      toast({
        title: "Referral link created",
        description: "Your referral link has been created successfully",
      })
    },
    onError: (error: any) => {
      toast({
        title: "Failed to create referral link",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      })
    },
  })
}

export function useReferralLinks() {
  return useQuery({
    queryKey: ["referral-links"],
    queryFn: async () => {
      const response = await userApi.getReferralLinks()
      return response.data
    },
  })
}
