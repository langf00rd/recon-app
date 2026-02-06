import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

export default async function Page() {
  return (
    <div>
      <Header
        title="Reconciliation"
        slotRight={
          <Popover>
            <PopoverTrigger asChild>
              <Button className="pr-0 bg-black">
                Ingest
                <span className="border-l border-l-white/40 px-2 flex items-center justify-center">
                  <ChevronDown />
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-44 p-1">
              <Button variant="ghost" className="w-full">
                Internal ledger
              </Button>
              <Button variant="ghost" className="w-full">
                Provider transactions
              </Button>
            </PopoverContent>
          </Popover>
        }
      />
    </div>
  );
}
