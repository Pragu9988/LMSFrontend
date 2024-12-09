"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleHelp, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

export function AppHeader() {
  const pathname = usePathname();

  const pageTitle = () => {
    let pathMappings: Record<string, string> = {
      "/settings/profile": "User Profile",
      "/dashboard": "Dashboard",
      "/courses": "Course List",
      "/quizzes": "Quizzes",
      "/subscriptions": "Subscriptions",
      "/payments": "Payments",
      "/reports": "Reports",
      "/assignments": "Assignments",
    };
    return pathMappings[pathname] || "";
  };
  return (
    <div className="flex px-4 items-center justify-between h-16 shadow-sm border-b border-gray-200 sticky top-0 bg-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h2 className="text-2xl font-semibold">{pageTitle()}</h2>
      </div>
      <div className="flex items-center gap-4 [&>svg]:size-5 [&>svg]:shrink-0">
        <Input type="search" placeholder="Enter Keyword" />
        <Separator orientation="vertical" className="h-5" />
        <Bell />
        <CircleHelp />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
