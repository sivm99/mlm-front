"use client"
import { MLMTree } from "@/components/mlm-tree"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// Sample data for development
const sampleData = [
  {
    id: "AL00000001",
    name: "Master",
    leftUser: "AL07426960",
    rightUser: "AL63966564",
    sponsor: "AL00000001",
    redeemedTimes: 0,
    associatedUsersCount: 2,
    associatedActiveUsersCount: 0,
    isBlocked: false,
    isActive: true,
    position: "LEFT",
    role: "ADMIN",
  },
  {
    id: "AL07426960",
    name: "Left User",
    leftUser: null,
    rightUser: null,
    sponsor: "AL00000001",
    redeemedTimes: 0,
    associatedUsersCount: 0,
    associatedActiveUsersCount: 0,
    isBlocked: false,
    isActive: false,
    position: "LEFT",
    role: "USER",
  },
  {
    id: "AL63966564",
    name: "Right User",
    leftUser: null,
    rightUser: "AL60750280",
    sponsor: "AL00000001",
    redeemedTimes: 0,
    associatedUsersCount: 20,
    associatedActiveUsersCount: 0,
    isBlocked: false,
    isActive: true,
    position: "RIGHT",
    role: "USER",
  },
  {
    id: "AL60750280",
    name: "Right Joiner of a user",
    leftUser: null,
    rightUser: "AL58175742",
    sponsor: "AL63966564",
    redeemedTimes: 0,
    associatedUsersCount: 0,
    associatedActiveUsersCount: 0,
    isBlocked: false,
    isActive: false,
    position: "RIGHT",
    role: "USER",
  },
  {
    id: "AL58175742",
    name: "Right Joiner of a user",
    leftUser: null,
    rightUser: "AL67334196",
    sponsor: "AL63966564",
    redeemedTimes: 0,
    associatedUsersCount: 0,
    associatedActiveUsersCount: 0,
    isBlocked: false,
    isActive: false,
    position: "RIGHT",
    role: "USER",
  },
]

export default function NetworkPage() {
  // In a real app, use this instead of the sample data
  // const { data, isLoading, error } = useMLMTree()

  // For development, we'll use the sample data
  const isLoading = false
  const error = null
  const data = { data: sampleData }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Network Tree</h1>
        <p className="text-muted-foreground">View your complete network structure</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>MLM Tree Visualization</CardTitle>
          <CardDescription>Your complete network structure with all users</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-[400px] w-full" />
            </div>
          ) : error ? (
            <div className="flex h-[400px] w-full items-center justify-center rounded-lg border border-dashed">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Failed to load network data. Please try again.</p>
              </div>
            </div>
          ) : (
            <MLMTree data={data.data} />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
