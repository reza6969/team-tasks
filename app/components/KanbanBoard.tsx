"use client"

import { TaskCard } from "./TaskCard"

export type Task = {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority?: "low" | "medium" | "high"
  dueDate?: string
  createdAt?: string
  assignedAt?: string
  assignee?: {
    id: string
    name: string
    email: string
    avatar?: string
  }
}

interface KanbanBoardProps {
  tasks: Task[]
  onAssigneeChange?: (taskId: string, userId: string) => void
}

export function KanbanBoard({ tasks, onAssigneeChange }: KanbanBoardProps) {
  const columns = [
    { title: "Todo", status: "todo" },
    { title: "In Progress", status: "in-progress" },
    { title: "Done", status: "done" },
  ] as const

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map((column) => (
        <div key={column.status} className="p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === column.status)
              .map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task}
                  onAssigneeChange={onAssigneeChange}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
} 