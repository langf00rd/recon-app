import { DemoEmailCollectionDialog } from "@/components/dialogs/demo-email-collection";
import HeroBackground from "@/components/landing/hero-bg";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { ChevronRight, Link } from "lucide-react";
import { cookies } from "next/headers";
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

        <section className="relative py-32 md:pt-0 md:h-[90vh] px-5">
          <HeroBackground />
          <div className="relative w-full h-full flex items-center justify-center flex-col gap-8 text-center">
            <h1 className="text-[2.2rem] md:text-[5rem] md:leading-[1.2] max-w-250">
              <Balancer>Transaction Reconciliation Minus the Chaos</Balancer>
            </h1>
            <p className="text-xl md:text-[1.8rem] max-w-200">
              <Balancer>
                A fintech reconciliation tool built for high-volume payments. No
                spreadsheets. No guesswork. No late nights.
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

        <section className="md:h-screen bg-neutral-200/30">
          <div className="px-10 py-32 max-w-275 flex-col mx-auto flex justify-center h-full">
            <p className="text-[2rem] md:text-[4.5rem] text-black font-[450]">
              <Balancer>
                Most fintech teams waste hours every day manually checking
                transactions across banks, telcos, and payment providers...
              </Balancer>
            </p>
          </div>
        </section>

        <section className="md:h-screen bg-primary">
          <div className="px-10 py-32 max-w-275 flex-col mx-auto flex justify-center h-full">
            <p className="text-[2rem] md:text-[4.5rem] text-primary-foreground font-[450]">
              <Balancer>
                We&apos;re building a reconciliation tool that centralizes your
                data, catches mismatches early, and gives your team control
                back...
              </Balancer>
            </p>
          </div>
        </section>

        <section className="md:h-screen">
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

        <section className="bg-primary">
          <div className="px-10 py-32 gap-10 max-w-275 flex-col mx-auto flex justify-center h-full">
            <p className="text-[2rem] md:text-[4.5rem] text-primary-foreground font-[450]">
              <Balancer>Ready to get started?</Balancer>
            </p>
            <div className="flex flex-col md:flex-row relative md:left-[70px] gap-4 md:gap-[160px]">
              <DemoEmailCollectionDialog>
                <Button className="md:scale-[2] h-12 md:h-8">
                  Join early access
                </Button>
              </DemoEmailCollectionDialog>
              {hasFilledEarlyAccessForm ? (
                <Link href={ROUTES.overview}>
                  <Button variant="ghost" className="md:scale-[2] h-12 md:h-8">
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

        {/*<section>
          <div className="max-w-[1300px] border mx-auto flex gap-10">
            <div className="flex-1">
              <h2>The problem</h2>
              <p className="md:text-xl text-[14px]">
                <Balancer>
                  Most fintech teams waste hours every day manually checking
                  transactions across banks, telcos, and payment providers.
                  We’re building a lean reconciliation platform that centralizes
                  your data, catches mismatches early, and gives your team
                  control back.
                </Balancer>
              </p>
            </div>
            <div className="flex-1">
              <h2>Our solution</h2>
              <ol className="list-inside list-disc md:text-xl text-[14px] space-y-1">
                <li>Built for auditability, security, and privacy</li>
                <li>Single of truth for internal and provider transactions</li>
                <li>Fast, deterministic matching with exception handling</li>
                <li>Keep a fully auditable trail for compliance</li>
              </ol>
            </div>
          </div>
        </section>*/}

        {/*<div className="md:max-w-225 py-32 px-5 space-y-4 md:p-10">
          <h1 className="text-3xl md:text-[52px]">
            Reconciliation Minus the Chaos
          </h1>
          <p className="text-">
            <Balancer>
              Fintech reconciliation built for high-volume payments. No
              spreadsheets. No guesswork. No late nights.
            </Balancer>
          </p>
          <div className="flex items-center mt-4 gap-4">
            <DemoEmailCollectionDialog>
              <Button>Join early access</Button>
            </DemoEmailCollectionDialog>
            {hasFilledEarlyAccessForm ? (
              <Link href={ROUTES.overview}>
                <Button variant="ghost">
                  Try demo
                  <ChevronRight size={18} />
                </Button>
              </Link>
            ) : (
              <DemoEmailCollectionDialog isUsingDemo>
                <Button variant="ghost">
                  Try demo
                  <ChevronRight size={18} />
                </Button>
              </DemoEmailCollectionDialog>
            )}
          </div>
        </div>*/}

        {/*<div className="flex flex-col md:flex-row items-start gap-20 space-evenly mx-auto p-5 md:p-10">
          <div className="flex-1">
            <p className="md:text-xl text-[14px]">
              <Balancer>
                Most fintech teams waste hours every day manually checking
                transactions across banks, telcos, and payment providers. We’re
                building a lean reconciliation platform that centralizes your
                data, catches mismatches early, and gives your team control
                back.
              </Balancer>
            </p>
          </div>
          <div className="flex-1">
            <ol className="list-inside list-disc md:text-xl text-[14px] space-y-1">
              <li>Built for auditability, security, and privacy</li>
              <li>Single of truth for internal and provider transactions</li>
              <li>Fast, deterministic matching with exception handling</li>
              <li>Keep a fully auditable trail for compliance</li>
            </ol>
          </div>
        </div>*/}

        {/*<footer className="flex justify-center items-center border-t py-5">
          <p>
            {APP_NAME} &copy; {new Date().getFullYear()}
          </p>
        </footer>*/}

        {/*<div className="md:border-y p-5 md:p-10">
          <h3 className="md:text-xl font-medium! mb-4">Join the Early Access</h3>
          <form className="flex gap-2 items-center md:max-w-125">
            <Input
              required
              type="email"
              name="business_email"
              placeholder="Your business email"
            />
            <Button>
              Notify me <ChevronRight />
            </Button>
          </form>
          <small>
            We respect your privacy. No spam. Only updates about the launch.
          </small>
        </div>*/}
      </>
    </>
  );
}
