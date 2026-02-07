import { cn } from "@/lib/utils";

export function HorizontalDashedLine(props: { className?: string }) {
  return (
    <div
      className={cn(`w-full flex-1 border border-dashed`, props.className)}
    />
  );
}
