import { DemoEmailCollectionDialog } from "@/components/dialogs/demo-email-collection";
import HeroBackground from "@/components/landing/hero-bg";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { ChevronRight } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default async function Home() {
  const cookieStore = await cookies();
  const hasFilledEarlyAccessForm =
    cookieStore.get("early_access")?.value === "0";
  return (
    <>
      <>
        <header className="flex items-center justify-between p-5 md:p-10 pb-0">
          <div className="flex gap-2">
            <Logo />
          </div>
          <nav className="flex-2 md:max-w-44 hidden md:block">
            <ul className="flex items-center justify-between">
              {["company", "pricing"].map((item, index) => (
                <li
                  className="border-b cursor-not-allowed border-b-foreground capitalize"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
          <section className="relative py-32 md:pt-0 md:h-[90vh] px-5 snap-start">
            <HeroBackground />
            <div className="relative w-full h-full flex items-center justify-center flex-col gap-8 text-center">
              <h1 className="text-[2.2rem] md:text-[5rem] md:leading-[1.2] max-w-250">
                <Balancer>Transaction Reconciliation Minus the Chaos</Balancer>
              </h1>
              <p className="text-xl md:text-[1.8rem] max-w-200">
                <Balancer>
                  A fintech reconciliation tool built for high-volume payments.
                  No spreadsheets. No guesswork. No late nights.
                </Balancer>
              </p>
              <div className="flex flex-col md:flex-row items-center mt-4 gap-4 md:gap-12">
                <DemoEmailCollectionDialog>
                  <Button className="scale-[1.1] md:scale-[1.3]">
                    Join early access
                  </Button>
                </DemoEmailCollectionDialog>
                {hasFilledEarlyAccessForm ? (
                  <Link href={ROUTES.overview}>
                    <Button
                      variant="ghost"
                      className="scale-[1.1] md:scale-[1.3]"
                    >
                      Try demo
                      <ChevronRight size={18} />
                    </Button>
                  </Link>
                ) : (
                  <DemoEmailCollectionDialog isUsingDemo>
                    <Button
                      variant="ghost"
                      className="scale-[1.1] md:scale-[1.3]"
                    >
                      Try demo
                      <ChevronRight size={18} />
                    </Button>
                  </DemoEmailCollectionDialog>
                )}
              </div>
            </div>
          </section>

          <section className="md:h-screen bg-neutral-200/30 snap-start">
            <div className="px-10 py-32 max-w-275 flex-col mx-auto flex justify-center h-full">
              <p className="text-[2rem] md:text-[4.5rem] text-black font-[450]">
                <Balancer>
                  Most fintech teams waste hours every day manually checking
                  transactions across banks, telcos, and payment providers...
                </Balancer>
              </p>
            </div>
          </section>

          <section className="md:h-screen bg-primary snap-start">
            <div className="px-10 py-32 max-w-275 flex-col mx-auto flex justify-center h-full">
              <p className="text-[2rem] md:text-[4.5rem] text-primary-foreground font-[450]">
                <Balancer>
                  We&apos;re building a reconciliation tool that centralizes
                  your data, catches mismatches early, and gives your team
                  control back...
                </Balancer>
              </p>
            </div>
          </section>

          <section className="md:h-screen snap-start">
            <div className="px-10 py-32 max-w-275 flex-col mx-auto flex justify-center h-full">
              <h1 className="text-[2rem] md:text-[4.2rem] mb-10">
                Introducing Reecon
              </h1>
              <ol className="text-black text-[1.4rem] md:text-[3rem]">
                <li>• Built for auditability, security, and privacy</li>
                <li>• Safe storage of internal &amp; provider transactions</li>
                <li>• Deterministic matching + exception handling</li>
              </ol>
            </div>
          </section>

          <section className="bg-primary md:h-screen snap-start">
            <div className="px-10 py-32 gap-10 max-w-275 flex-col mx-auto flex justify-center h-full">
              <p className="text-[2rem] md:text-[4.5rem] text-primary-foreground font-[450]">
                <Balancer>Ready to get started?</Balancer>
              </p>
              <div className="flex flex-col md:flex-row relative md:left-17.5 gap-4 md:gap-40">
                <DemoEmailCollectionDialog>
                  <Button className="md:scale-[2] h-12 md:h-8">
                    Join early access
                  </Button>
                </DemoEmailCollectionDialog>
                {hasFilledEarlyAccessForm ? (
                  <Link href={ROUTES.overview}>
                    <Button
                      variant="ghost"
                      className="md:scale-[2] h-12 md:h-8"
                    >
                      Try demo
                      <ChevronRight size={18} />
                    </Button>
                  </Link>
                ) : (
                  <DemoEmailCollectionDialog isUsingDemo>
                    <Button
                      variant="ghost"
                      className="md:scale-[2] h-12 md:h-8 text-white"
                    >
                      Try demo
                      <ChevronRight size={18} />
                    </Button>
                  </DemoEmailCollectionDialog>
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
}
