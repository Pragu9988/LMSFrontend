import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/layout/app-sidebar";
import { AppHeader } from "@/components/admin/layout/app-header";
import { cn } from "@/lib/utils";

interface AdminLayoutInterface {
  children: React.ReactNode;
  className?: String;
}

const AdminLayout = ({ children, className }: AdminLayoutInterface) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen h-svh w-full overflow-hidden">
        <AppHeader />
        <div className={cn("p-6 bg-slate-50 h-full flex-1", className)}>
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
