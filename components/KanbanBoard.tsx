"use client"

import { TaskCard } from "@/app/components/TaskCard"
import { Column } from "@/lib/tasks"

export interface Task {
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
  tasks?: Task[]
  columns: Column[]
  onAssigneeChange?: (taskId: string, userId: string) => void
}

export function KanbanBoard({ tasks = [], columns, onAssigneeChange }: KanbanBoardProps) {
  const columnsWithTasks = columns.map(column => ({
    ...column,
    tasks: tasks.filter(task => task.status === column.id)
  }));

  return (
    <div className="flex gap-4 p-4 overflow-x-auto min-h-[calc(100vh-4rem)]">
      {columnsWithTasks.map((column) => (
        <div
          key={column.id}
          className="flex flex-col flex-shrink-0 w-80 bg-muted/20 rounded-lg"
        >
          <div className="p-4 font-semibold">{column.title}</div>
          <div className="flex-1 p-2 space-y-4">
            {column.tasks.map((task) => (
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