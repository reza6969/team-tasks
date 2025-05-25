import { assignees } from "@/lib/data";

export interface Column {
  id: string;
  title: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done"; // Should ideally reference Column ID
  assignee?: { id: string; name: string; email: string; avatar?: string };
  priority?: "low" | "medium" | "high";
  dueDate?: string;
}

// Simulate fetching columns (Server Action)
export async function fetchColumns(): Promise<Column[]> {
  const columns: Column[] = [
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return columns;
}

// Simulate fetching tasks (Server Action)
export async function fetchTasks(): Promise<Task[]> {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Implement Authentication",
      description: "Set up user authentication using NextAuth.js",
      status: "todo",
      assignee: assignees.find((a) => a.id === "1"),
      priority: "high",
      dueDate: "2024-07-01",
    },
    {
      id: "2",
      title: "Design Dashboard",
      description: "Create wireframes for the main dashboard",
      status: "in-progress",
      assignee: assignees.find((a) => a.id === "2"),
      priority: "medium",
      dueDate: "2024-07-05",
    },
    {
      id: "3",
      title: "Setup Database",
      description: "Initialize and configure the database",
      status: "done",
      assignee: assignees.find((a) => a.id === "3"),
      priority: "low",
      dueDate: "2024-06-28",
    },
  ];
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return tasks;
}