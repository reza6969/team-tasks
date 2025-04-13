"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { UserCircle, Calendar, Clock, AlertCircle } from "lucide-react"
import type { Task } from "./KanbanBoard"

// Mock users data - in a real app, this would come from your backend
const USERS = [
  { id: "1", name: "Alice Smith", email: "alice@example.com", avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=alice" },
  { id: "2", name: "Bob Johnson", email: "bob@example.com", avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=bob" },
  { id: "3", name: "Carol Williams", email: "carol@example.com", avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=carol" },
]

interface TaskCardProps {
  task: Task
  onAssigneeChange?: (taskId: string, userId: string) => void
}

export function TaskCard({ task, onAssigneeChange }: TaskCardProps) {
  const handleAssigneeChange = (userId: string) => {
    onAssigneeChange?.(task.id, userId)
  }

  const getPriorityColor = (priority?: string) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-yellow-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <Card className="w-full hover:shadow-md transition-all duration-200 border-l-4 border-l-primary group">
      <CardHeader className="space-y-2 pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-semibold line-clamp-1 flex-1">
            {task.title}
          </CardTitle>
          <div className="flex items-center gap-2 shrink-0">
            {task.priority && (
              <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
            )}
            <Badge variant="secondary" className="text-xs">
              {task.status || 'Todo'}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {task.description || (
            <span className="flex items-center gap-1 text-muted-foreground">
              <AlertCircle className="h-3 w-3" />
              No description provided
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <Separator className="mb-3" />
      <CardContent>
        <div className="flex items-center justify-between">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                {task.assignee ? (
                  <>
                    <Avatar className="h-8 w-8 ring-2 ring-background">
                      <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                      <AvatarFallback>{task.assignee.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{task.assignee.name}</span>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <UserCircle className="h-5 w-5" />
                    <span className="text-sm">Unassigned</span>
                  </div>
                )}
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              {task.assignee && (
                <div className="flex justify-between space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={task.assignee.avatar} />
                    <AvatarFallback>{task.assignee.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{task.assignee.name}</h4>
                    <p className="text-sm text-muted-foreground">{task.assignee.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {task.assignedAt ? `Assigned on ${new Date(task.assignedAt).toLocaleDateString()}` : 'Recently assigned'}
                    </p>
                  </div>
                </div>
              )}
            </HoverCardContent>
          </HoverCard>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Change Assignee
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Assign Task</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[300px] w-full pr-4">
                      <div className="py-4">
                        <Select
                          value={task.assignee?.id || ""}
                          onValueChange={handleAssigneeChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select an assignee" />
                          </SelectTrigger>
                          <SelectContent>
                            {USERS.map((user) => (
                              <SelectItem key={user.id} value={user.id}>
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                  </Avatar>
                                  <span>{user.name}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reassign this task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
      {(task.dueDate || task.createdAt) && (
        <>
          <Separator className="mt-3" />
          <CardFooter className="text-xs text-muted-foreground pt-3">
            {task.dueDate && (
              <div className="flex items-center gap-1 mr-4">
                <Calendar className="h-3 w-3" />
                <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
              </div>
            )}
            {task.createdAt && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
              </div>
            )}
          </CardFooter>
        </>
      )}
    </Card>
  )
} 