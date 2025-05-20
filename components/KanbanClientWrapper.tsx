"use client";

import { KanbanBoard } from "./KanbanBoard";
import { Task, Column } from "@/lib/tasks";

interface KanbanClientWrapperProps {
  tasks: Task[];
  columns: Column[];
}

export function KanbanClientWrapper({ tasks, columns }: KanbanClientWrapperProps) {
  const handleAssigneeChange = (taskId: string, userId: string) => {
    // In a real application, this would update the database
    console.log(`Assigning task ${taskId} to user ${userId}`);
  };

  return (
    <KanbanBoard tasks={tasks} columns={columns} onAssigneeChange={handleAssigneeChange} />
  );
}