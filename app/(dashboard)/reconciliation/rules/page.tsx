"use client";

import ReconRuleDialog from "@/components/dialogs/rule";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Empty, EmptyContent, EmptyTitle } from "@/components/ui/empty";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DEFAULT_RECON_RULES } from "@/lib/engine/rules";
import { HelpCircle, PlusIcon } from "lucide-react";

export default function Page() {
  return (
    <>
      <Header
        title="Reconciliation Rules"
        slotRight={
          <ReconRuleDialog>
            <Button>
              <PlusIcon />
              New rule
            </Button>
          </ReconRuleDialog>
        }
      />
      <div className="space-y-2">
        {DEFAULT_RECON_RULES.map((rule, index) => (
          <Card key={index}>
            <CardContent>
              <CardHeader>
                <CardTitle>{rule.name}</CardTitle>
                <CardDescription>{rule.description}</CardDescription>
                <CardAction>
                  <Badge>{rule.enabled ? "Enabled" : "Disabled"}</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="mt-10 space-y-3">
                {rule.conditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <code>{condition.left}</code>
                    <Tooltip>
                      <TooltipTrigger>
                        <small className="cursor-help flex items-center gap-1">
                          {condition.operator}{" "}
                          <HelpCircle className="opacity-50" size={12} />
                        </small>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                    <code>{condition.value ?? condition.right}</code>
                  </div>
                ))}
              </CardContent>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );

  return (
    <Empty>
      <EmptyContent>
        <EmptyTitle>Coming soon...</EmptyTitle>
      </EmptyContent>
    </Empty>
  );
}
