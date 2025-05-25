import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaskDialog } from "@/app/components/TaskDialog";
import { Task } from "@/lib/tasks";

interface KanbanColumnProps {
    title: string;
    children: React.ReactNode;
    onTaskCreate: (task: { title: string; status: Task["status"] }) => void;
}

export function KanbanColumn({ title, children, onTaskCreate }: KanbanColumnProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{title}</h2>
                <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
                    <PlusIcon className="w-4 h-4" />
                </Button>
                <TaskDialog
                    open={open}
                    onOpenChange={setOpen}
                    onSubmit={(data) => {
                        onTaskCreate({ title: data.title, status: title as Task["status"] });
                        setOpen(false);
                    }}
                />
            </div>
            <div className="flex flex-col gap-2">
                {children}
            </div>
        </div>
    );
}
