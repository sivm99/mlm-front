"use client"

import { useState } from "react"
import { useCreateReferralLink } from "@/lib/hooks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Copy, Check, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ReferralsPage() {
  const [position, setPosition] = useState<"LEFT" | "RIGHT">("LEFT")
  const [copied, setCopied] = useState<Record<string, boolean>>({})
  const createReferralLink = useCreateReferralLink()

  // In a real app, use this instead of the sample data
  // const { data, isLoading } = useReferralLinks()

  // For development, we'll use sample data
  const isLoading = false
  const data = {
    data: [
      { id: "1", code: "SKIFSWD", position: "LEFT", createdAt: "2025-05-15T10:30:00Z", usedBy: null },
      { id: "2", code: "ABCDEFG", position: "RIGHT", createdAt: "2025-05-10T14:20:00Z", usedBy: "John Doe" },
    ],
  }

  const handleCreateLink = () => {
    createReferralLink.mutate({ position })
  }

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(`https://asilocloud.ink/register?sponsor=${code}`)
    setCopied({ ...copied, [code]: true })
    setTimeout(() => {
      setCopied({ ...copied, [code]: false })
    }, 2000)
  }

  const shareLink = (code: string) => {
    if (navigator.share) {
      navigator.share({
        title: "Join AlPrimus MLM",
        text: "Join my network on AlPrimus MLM!",
        url: `https://asilocloud.ink/register?sponsor=${code}`,
      })
    } else {
      copyToClipboard(code)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Referrals</h1>
        <p className="text-muted-foreground">Create and manage your referral links</p>
      </div>

      <Tabs defaultValue="create">
        <TabsList>
          <TabsTrigger value="create">Create Link</TabsTrigger>
          <TabsTrigger value="manage">Manage Links</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Referral Link</CardTitle>
              <CardDescription>Generate a new referral link to invite users to your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Position</Label>
                  <RadioGroup
                    value={position}
                    onValueChange={(value) => setPosition(value as "LEFT" | "RIGHT")}
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
                </div>

                <Button onClick={handleCreateLink} disabled={createReferralLink.isPending}>
                  {createReferralLink.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Share2 className="mr-2 h-4 w-4" />
                      Create Referral Link
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Links</CardTitle>
              <CardDescription>Manage and share your existing referral links</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-12 w-full animate-pulse rounded-md bg-muted"></div>
                  <div className="h-12 w-full animate-pulse rounded-md bg-muted"></div>
                </div>
              ) : data.data.length === 0 ? (
                <div className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">You don&apos;t have any referral links yet</p>
                    <Button
                      variant="link"
                      onClick={() => document.querySelector('[value="create"]')?.dispatchEvent(new Event("click"))}
                    >
                      Create your first link
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {data.data.map((link) => (
                    <div key={link.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{link.code}</span>
                          <Badge variant={link.position === "LEFT" ? "default" : "secondary"}>{link.position}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Created: {new Date(link.createdAt).toLocaleDateString()}
                        </p>
                        {link.usedBy && <p className="text-xs text-muted-foreground">Used by: {link.usedBy}</p>}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard(link.code)}
                          disabled={copied[link.code]}
                        >
                          {copied[link.code] ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => shareLink(link.code)}>
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
