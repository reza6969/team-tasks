"use client";

import { KanbanBoard } from "./KanbanBoard";
import { Task, Column, TaskFormValues } from "@/lib/tasks";
import { useState } from "react";
import { createTaskAction } from "@/app/create-task-action";

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

  const handleTaskCreate = async (data: TaskFormValues) => {
    const result = await createTaskAction(data);
    if (result.task) {
      // Map the returned task to the UI Task type
      const newTask: Task = {
        id: result.task.id.toString(),
        title: result.task.title,
        description: result.task.description ?? "",
        status: data.status, // Use the status from the form
        priority: data.priority,
        dueDate: data.dueDate ? data.dueDate.toISOString() : undefined,
        assignee: undefined, // You may want to resolve this if needed
      };
      setTaskList((prev) => [...prev, newTask]);
    } else {
      // handle error (e.g. show toast)
      console.error(result.error);
    }
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