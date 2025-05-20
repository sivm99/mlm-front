"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Users, User, UserCheck, UserX } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type MLMUser = {
  id: string
  name: string
  leftUser: string | null
  rightUser: string | null
  sponsor: string
  redeemedTimes: number
  associatedUsersCount: number
  associatedActiveUsersCount: number
  isBlocked: boolean
  isActive: boolean
  position: "LEFT" | "RIGHT"
  role: "ADMIN" | "USER"
}

type MLMTreeProps = {
  data: MLMUser[]
}

export function MLMTree({ data }: MLMTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({})
  const [zoomLevel, setZoomLevel] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Find the root node (usually the admin)
  const rootNode = data.find((user) => user.role === "ADMIN") || data[0]

  // Create a map for quick lookup
  const userMap = data.reduce(
    (acc, user) => {
      acc[user.id] = user
      return acc
    },
    {} as Record<string, MLMUser>,
  )

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 2))
  }

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
  }

  const resetZoom = () => {
    setZoomLevel(1)
  }

  useEffect(() => {
    // Expand the root node by default
    if (rootNode) {
      setExpandedNodes((prev) => ({
        ...prev,
        [rootNode.id]: true,
      }))
    }
  }, [rootNode])

  const renderNode = (userId: string | null, position: "LEFT" | "RIGHT" | null) => {
    if (!userId || !userMap[userId]) return null

    const user = userMap[userId]
    const isExpanded = expandedNodes[userId] || false
    const hasChildren = user.leftUser || user.rightUser

    return (
      <div className="flex flex-col items-center">
        <div className={`relative mb-2 ${position === "LEFT" ? "mr-4" : position === "RIGHT" ? "ml-4" : ""}`}>
          {position && <div className="absolute -top-4 left-1/2 h-4 w-px -translate-x-1/2 bg-gray-300"></div>}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card
                  className={`w-48 border ${user.isActive ? "border-green-500" : "border-gray-300"} ${user.isBlocked ? "bg-red-50" : ""}`}
                >
                  <CardHeader className="p-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={user.role === "ADMIN" ? "destructive" : "outline"}>{user.role}</Badge>
                      {hasChildren && (
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => toggleNode(user.id)}>
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                    <CardTitle className="text-sm">{user.name}</CardTitle>
                    <CardDescription className="text-xs">{user.id}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{user.associatedUsersCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserCheck className="h-3 w-3" />
                        <span>{user.associatedActiveUsersCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{user.position}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {user.isBlocked ? (
                          <UserX className="h-3 w-3 text-red-500" />
                        ) : (
                          <UserCheck className="h-3 w-3 text-green-500" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1 p-1">
                  <p>
                    <strong>ID:</strong> {user.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Sponsor:</strong> {user.sponsor}
                  </p>
                  <p>
                    <strong>Position:</strong> {user.position}
                  </p>
                  <p>
                    <strong>Status:</strong> {user.isActive ? "Active" : "Inactive"}
                  </p>
                  <p>
                    <strong>Redeemed Times:</strong> {user.redeemedTimes}
                  </p>
                  <p>
                    <strong>Associated Users:</strong> {user.associatedUsersCount}
                  </p>
                  <p>
                    <strong>Active Users:</strong> {user.associatedActiveUsersCount}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {isExpanded && hasChildren && (
          <div className="relative mt-4 flex justify-center">
            <div className="absolute -top-4 left-1/2 h-4 w-px -translate-x-1/2 bg-gray-300"></div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                {user.leftUser && (
                  <>
                    <div className="mb-2 h-px w-16 bg-gray-300"></div>
                    {renderNode(user.leftUser, "LEFT")}
                  </>
                )}
              </div>
              <div className="flex flex-col items-center">
                {user.rightUser && (
                  <>
                    <div className="mb-2 h-px w-16 bg-gray-300"></div>
                    {renderNode(user.rightUser, "RIGHT")}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-end gap-2">
        <Button variant="outline" size="sm" onClick={zoomOut}>
          -
        </Button>
        <Button variant="outline" size="sm" onClick={resetZoom}>
          Reset
        </Button>
        <Button variant="outline" size="sm" onClick={zoomIn}>
          +
        </Button>
      </div>

      <div className="relative overflow-auto rounded-lg border bg-card p-4" style={{ maxHeight: "70vh" }}>
        <div
          ref={containerRef}
          className="flex min-w-max justify-center p-8 transition-transform duration-200"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top center" }}
        >
          {rootNode && renderNode(rootNode.id, null)}
        </div>
      </div>
    </div>
  )
}
