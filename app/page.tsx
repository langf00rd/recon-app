import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="md:max-w-[90vw] flex flex-col justify-between md:h-screen md:border-x mx-auto">
      <header className="md:flex items-center hidden justify-between p-10 pb-0">
        <h3 className="flex-1">reconn</h3>
        <nav className="flex-2 md:max-w-[500px]">
          <ul className="flex items-center justify-between">
            {["company", "pricing", "terms", "privacy", "contact"].map(
              (item, index) => (
                <li
                  className="border-b border-b-foreground capitalize"
                  key={index}
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      <div className="md:max-w-[900px] space-y-4 p-10">
        <h1 className="text-2xl md:text-[52px]">
          Reconciliation Minus the Overhead
        </h1>
        <p className="text-xl">
          <Balancer>
            No need for endless spreadsheets and manual checks. Our tool helps
            FinTechs reconcile transactions faster, save time, reduce errors,
            and make audits effortless.
          </Balancer>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-20 space-evenly mx-auto p-10">
        <div className="flex-1">
          <p className="text-xl">
            Automatically reconcile transactions across providers, highlights
            exceptions, and give your team a clear, auditable view of what
            actually happened to the money. Join early to be the first to try
            it.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-2 border-b w-fit border-b-black">
            Key Benefits
          </h3>
          <ol className="list-inside list-disc md:text-xl space-y-1">
            <li>Built with compliance and auditability in mind</li>
            <li>Auto-match internal &amp; provider transactions</li>
            <li>Flag exceptions &amp; prioritize what matters</li>
            <li>Keep a fully auditable trail for compliance</li>
            <li>Reduce hours of manual reconciliation to minutes</li>
          </ol>
        </div>
      </div>

      <div className="md:border-y p-10">
        <h3 className="text-2xl font-[500]! mb-4">
          Join the Early Access List{" "}
          <span className="block md:inline text-xl opacity-50 font-normal">
            (Only limited spots available)
          </span>
        </h3>
        <form className="flex gap-2 items-center md:max-w-[500px]">
          <Input
            required
            type="email"
            name="business_email"
            placeholder="Your business email"
          />
          <Button className="h-12">
            Notify me <ChevronRight />
          </Button>
        </form>
        <small>
          We respect your privacy. No spam. Only updates about the launch.
        </small>
      </div>
    </main>
  );
}
