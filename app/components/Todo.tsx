"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Task } from "./KanbanBoard"

interface TodoProps {
  task: Task
}

export function Todo({ task }: TodoProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>Status: {task.status}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{task.description}</p>
      </CardContent>
    </Card>
  )
} 