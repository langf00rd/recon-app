"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { APP_NAME } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { useMutation } from "@tanstack/react-query";
import Cookie from "js-cookie";
import { BookOpenText, Building, Mail, Phone, User2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function DemoEmailCollectionDialog(props: {
  children: React.ReactNode;
  isUsingDemo?: boolean;
}) {
  const joinListMutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const res = await fetch("/api/early-access", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
      if (res.error) throw new Error(res.error);
      return res;
    },
    onSuccess: () => {
      toast.success("Thank you for joining our early access list!");
      Cookie.set("early_access", "0", { expires: 365 });
      window.location.href = ROUTES.overview;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const phone = formData.get("phone_number") as string;
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const company = formData.get("company_name") as string;
    const industry = formData.get("industry") as string;
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phone,
      company_name: company,
      industry,
      app_name: APP_NAME,
    };
    joinListMutation.mutate(payload);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Join the early access list {props.isUsingDemo && "to use our demo"}
          </DialogTitle>
          <DialogDescription>
            We will notify you via email/phone when we launch
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <fieldset className="flex gap-4">
            <Input
              className="bg-white"
              prefixIcon={<User2 size={12} />}
              placeholder="First name"
              name="first_name"
              required
            />
            <Input
              className="bg-white"
              prefixIcon={<User2 size={12} />}
              placeholder="Last name"
              name="last_name"
              required
            />
          </fieldset>
          <Input
            className="bg-white"
            prefixIcon={<Mail size={12} />}
            placeholder="Business email"
            type="email"
            name="email"
            required
          />
          <Input
            className="bg-white"
            prefixIcon={<Phone size={12} />}
            placeholder="Phone number"
            type="tel"
            name="phone_number"
          />
          <Input
            className="bg-white"
            prefixIcon={<Building size={12} />}
            placeholder="Company"
            name="company_name"
            required
          />
          <Input
            className="bg-white"
            prefixIcon={<BookOpenText size={12} />}
            placeholder="Industry"
            name="industry"
            required
          />
          <DialogFooter className="bg-white">
            <Button disabled={joinListMutation.isPending}>
              {joinListMutation.isPending ? "Joining" : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
