"use client"

import { TaskCard } from "@/app/components/TaskCard"
import { Column } from "@/lib/tasks"
import { TaskDialog } from "@/app/components/TaskDialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority?: "low" | "medium" | "high"
  dueDate?: string
  createdAt?: string
  assignedAt?: string
  columnId: number
  assignee?: {
    id: string
    name: string
    email: string
    avatar?: string
    avatarUrl?: string
  }
}

interface KanbanBoardProps {
  tasks?: Task[]
  columns: Column[]
  onAssigneeChange?: (taskId: string, userId: string) => void
  onTaskCreate?: (task: Omit<Task, "id">) => void
  onTaskUpdate?: (task: Task) => void
}

export function KanbanBoard({ tasks = [], columns, onAssigneeChange, onTaskCreate, onTaskUpdate }: KanbanBoardProps) {
  const [openDialogColumn, setOpenDialogColumn] = useState<string | null>(null)
  const columnsWithTasks = columns.map(column => ({
    ...column,
    tasks: tasks.filter(task => task.status === column.id)
  }));

  return (
    <div className="flex gap-4 p-4 overflow-x-auto min-h-[calc(100vh-4rem)]">
      {columnsWithTasks.map((column) => (
        <div
          key={column.id}
          className="flex flex-col flex-shrink-0 w-80 bg-muted/20 rounded-lg relative"
        >
          <div className="p-4 font-semibold flex items-center justify-between">
            {column.title}
            <Button size="sm" variant="outline" onClick={() => setOpenDialogColumn(column.id)}>
              +
            </Button>
          </div>
          <div className="flex-1 p-2 space-y-4">
            {column.tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onAssigneeChange={onAssigneeChange}
                onTaskUpdate={onTaskUpdate}
              />
            ))}
          </div>
          <TaskDialog
            open={openDialogColumn === column.id}
            onOpenChange={(open) => setOpenDialogColumn(open ? column.id : null)}
            columnId={0} // Default column ID for new tasks
            onSubmit={(data) => {
              if (onTaskCreate) {
                onTaskCreate({
                  ...data,
                  status: column.id as Task["status"],
                  description: data.description ?? "",
                  dueDate: data.dueDate,
                  columnId: data.columnId,
                })
              }
            }}
          />
        </div>
      ))}
    </div>
  )
}