import { Card } from "@/components/ui/card"

export type Task = {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
}

interface KanbanBoardProps {
  tasks: Task[]
}

export function KanbanBoard({ tasks }: KanbanBoardProps) {
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
                <Card key={task.id} className="p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-medium mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
} 