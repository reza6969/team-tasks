"use client";

import { KanbanBoard } from "./KanbanBoard";
import { Task, Column } from "@/lib/tasks";
import { useState } from "react";

interface KanbanClientWrapperProps {
  tasks: Task[];
  columns: Column[];
}

export function KanbanClientWrapper({ tasks, columns }: KanbanClientWrapperProps) {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleAssigneeChange = (taskId: string, userId: string) => {
    // In a real application, this would update the database
    console.log(`Assigning task ${taskId} to user ${userId}`);
  };

  const handleTaskCreate = (task: Omit<Task, "id">) => {
    setTaskList((prev) => [
      ...prev,
      {
        ...task,
        id: Date.now().toString(),
      },
    ]);
  };

  return (
    <KanbanBoard
      tasks={taskList}
      columns={columns}
      onAssigneeChange={handleAssigneeChange}
      onTaskCreate={handleTaskCreate}
    />
  );
}