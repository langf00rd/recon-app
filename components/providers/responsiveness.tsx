"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";

export const ResponsivenessProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-screen px-10 flex-col gap-4 h-screen flex items-center justify-center">
        <p className="text-xl text-center">
          <Balancer>Please switch to a larger device to use this app</Balancer>
        </p>
        <Link href={ROUTES.index}>
          <Button>Go home</Button>
        </Link>
      </div>
    );
  }

  return children;
};
