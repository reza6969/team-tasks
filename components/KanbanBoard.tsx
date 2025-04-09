"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
}

interface KanbanBoardProps {
  tasks?: Task[]
}

export function KanbanBoard({ tasks = [] }: KanbanBoardProps) {
  const columns = [
    {
      title: "Todo",
      status: "todo",
      tasks: tasks.filter((task) => task.status === "todo"),
    },
    {
      title: "In Progress",
      status: "in-progress",
      tasks: tasks.filter((task) => task.status === "in-progress"),
    },
    {
      title: "Done",
      status: "done",
      tasks: tasks.filter((task) => task.status === "done"),
    },
  ]

  return (
    <div className="flex gap-4 p-4 overflow-x-auto min-h-[calc(100vh-4rem)]">
      {columns.map((column) => (
        <div
          key={column.status}
          className="flex flex-col flex-shrink-0 w-80 bg-muted/20 rounded-lg"
        >
          <div className="p-4 font-semibold">{column.title}</div>
          <div className="flex-1 p-2 space-y-4">
            {column.tasks.map((task) => (
              <Card key={task.id} className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">{task.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 text-sm text-muted-foreground">
                  {task.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 