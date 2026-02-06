import { AppSidebar } from "@/components/app-sidebar";
import HelpSidebar from "@/components/sidebar/help";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-10">{children}</main>
      <HelpSidebar />
    </SidebarProvider>
  );
}
