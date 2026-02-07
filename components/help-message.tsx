import { Info } from "lucide-react";
import { ReactNode } from "react";

export default function HelpMessage(props: { children: ReactNode }) {
  return (
    <p className="flex items-start bg-neutral-200/40 border p-2 px-3 rounded-sm gap-2">
      <div className="relative top-1">
        <Info size={16} />
      </div>
      {props.children}
    </p>
  );
}
