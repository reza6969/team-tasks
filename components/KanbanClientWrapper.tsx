"use client";

import { KanbanBoard } from "./KanbanBoard";
import { Task, Column } from "@/lib/tasks";
import { TaskFormValues } from "@/lib/zod-schemas";
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
        dueDate: data.dueDate,
        assignee: undefined, // You may want to resolve this if needed
        columnId: result.task.columnId,
      };
      setTaskList((prev) => [...prev, newTask]);
    } else {
      // handle error (e.g. show toast)
      console.error(result.error);
    }
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    console.log('Task update requested:', updatedTask);
    // For now, just update the local state
    // In the future, this will call a server action to update the database
    setTaskList((prev) => 
      prev.map((task) => 
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <KanbanBoard
      tasks={taskList}
      columns={columns}
      onAssigneeChange={handleAssigneeChange}
      onTaskCreate={handleTaskCreate}
      onTaskUpdate={handleTaskUpdate}
    />
  );
}