import { APP_NAME } from "@/lib/content";
import { Asterisk } from "lucide-react";

export function Logo(props: { size?: number; hideText?: boolean }) {
  return (
    <div className="flex gap-1 items-center">
      <div
        className={`hover:opacity-75 cursor-pointer transition-colors bg-primary text-primary-foreground flex aspect-square items-center justify-center rounded-lg`}
        style={{
          width: props.size || "30px",
          height: props.size || "30px",
        }}
      >
        <Asterisk className="size-4" />
      </div>
      {!props.hideText && (
        <p className="font-medium text-[20px] text-primary">{APP_NAME}</p>
      )}
    </div>
  );
}
