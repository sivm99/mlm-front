"use client"

import { useUser } from "@/lib/hooks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Package, UserCheck, UserPlus, ArrowUpRight, User } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const { data: userData } = useUser()

  // Placeholder data
  const stats = {
    totalEarnings: 1250,
    activeUsers: 12,
    pendingPayouts: 3,
    productsRedeemed: 2,
    weeklyProgress: 65,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {userData?.name || "User"}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/referrals">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Create Referral
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">+2 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingPayouts}</div>
            <p className="text-xs text-muted-foreground">Next payout in 3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products Redeemed</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.productsRedeemed}</div>
            <p className="text-xs text-muted-foreground">Last redeemed 14 days ago</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your progress towards the next payout</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Week 12 of 104</span>
                </div>
                <span className="text-sm text-muted-foreground">{stats.weeklyProgress}%</span>
              </div>
              <Progress value={stats.weeklyProgress} className="h-2" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Next Payout</p>
                    <p className="text-2xl font-bold">$2.70</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm">May 27, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Network Status</CardTitle>
            <CardDescription>Your direct referrals and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="left">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="left">Left</TabsTrigger>
                <TabsTrigger value="right">Right</TabsTrigger>
              </TabsList>
              <TabsContent value="left" className="space-y-4 pt-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">AL12345678</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      Active
                    </Badge>
                  </div>
                </div>
                <Link
                  href="/dashboard/network"
                  className="flex items-center justify-center gap-1 text-sm text-primary hover:underline"
                >
                  View all left users
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </TabsContent>
              <TabsContent value="right" className="space-y-4 pt-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Jane Smith</p>
                        <p className="text-xs text-muted-foreground">AL87654321</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                    >
                      Pending
                    </Badge>
                  </div>
                </div>
                <Link
                  href="/dashboard/network"
                  className="flex items-center justify-center gap-1 text-sm text-primary hover:underline"
                >
                  View all right users
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
