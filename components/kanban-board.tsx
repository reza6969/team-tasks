import { useState } from "react";
import { Task } from "@/lib/tasks";
import { KanbanColumn } from "@/components/kanban-column";

export default function KanbanBoard() {
    const [tasks, setTasks] = useState<Omit<Task, "id" | "description" | "assignee">[]>([
        { title: "Task 1", status: "todo", columnId: 1 },
        { title: "Task 2", status: "in-progress", columnId: 2 },
    ]);

    function handleTaskCreate(task: { title: string; status: Task["status"]; columnId: number }) {
        setTasks([...tasks, task]);
    }

    return (
        <div className="flex gap-4">
            <KanbanColumn title="To Do" columnId={1} onTaskCreate={handleTaskCreate}>
                {tasks.filter((t) => t.columnId === 1).map((task: { title: string }, i: number) => (
                    <div key={i} className="p-2 bg-white rounded shadow">{task.title}</div>
                ))}
            </KanbanColumn>
            <KanbanColumn title="In Progress" columnId={2} onTaskCreate={handleTaskCreate}>
                {tasks.filter((t) => t.columnId === 2).map((task: { title: string }, i: number) => (
                    <div key={i} className="p-2 bg-white rounded shadow">{task.title}</div>
                ))}
            </KanbanColumn>
        </div>
    );
}