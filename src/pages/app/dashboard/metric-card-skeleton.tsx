import { Skeleton } from "@/components/ui/skeleton";

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="w-35 mt-1 h-7" />
      <Skeleton className="h-4 w-52" />
    </>
  );
}
