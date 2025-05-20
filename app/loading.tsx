import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Skeleton for columns */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-8 w-3/4" /> {/* Column title */}
          <div className="space-y-2">
            {/* Skeletons for tasks within a column */}
            {[...Array(5)].map((_, j) => (
              <Skeleton key={j} className="h-12 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 