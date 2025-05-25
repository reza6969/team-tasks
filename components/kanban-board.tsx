import { useState } from "react";
import { Task } from "@/lib/tasks";
import { KanbanColumn } from "@/components/kanban-column";

export default function KanbanBoard() {
    const [tasks, setTasks] = useState<Omit<Task, "id" | "description" | "assignee">[]>([
        { title: "Task 1", status: "todo" },
        { title: "Task 2", status: "in-progress" },
    ]);

    function handleTaskCreate(task: { title: string; status: Task["status"] }) {
        setTasks([...tasks, task]);
    }

    return (
        <div className="flex gap-4">
            <KanbanColumn title="To Do" onTaskCreate={handleTaskCreate}>
                {tasks.filter((t: { status: string }) => t.status === "todo").map((task: { title: string }, i: number) => (
                    <div key={i} className="p-2 bg-white rounded shadow">{task.title}</div>
                ))}
            </KanbanColumn>
            <KanbanColumn title="In Progress" onTaskCreate={handleTaskCreate}>
                {tasks.filter((t: { status: string }) => t.status === "in-progress").map((task: { title: string }, i: number) => (
                    <div key={i} className="p-2 bg-white rounded shadow">{task.title}</div>
                ))}
            </KanbanColumn>
        </div>
    );
}