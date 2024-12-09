import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import {
  School,
  Home,
  Inbox,
  Settings,
  NotebookPen,
  CircleDollarSign,
  Podcast,
  ChartNoAxesCombined,
  Users,
  User,
  Bell,
  LogOut,
} from "lucide-react";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: School,
  },
  {
    title: "Quizzes",
    url: "/quizzes",
    icon: Inbox,
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: NotebookPen,
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
    icon: Podcast,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: CircleDollarSign,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
];

const footerItems = [
  {
    title: "Profile Setting",
    url: "/settings/profile",
    icon: User,
  },
  {
    title: "Notification Setting",
    url: "/settings/notification",
    icon: Bell,
  },
  {
    title: "System Setting",
    url: "/settings/system",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-white">
      <SidebarHeader>
        <Image src="/logo.svg" width={64} height={44} alt="Logo" />
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    size={"md"}
                    className="[&>svg]:size-5"
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size={"md"} className="[&>svg]:size-5">
              <>
                <Settings />
                <span>Settings</span>
              </>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {footerItems.map((item) => (
                <DropdownMenuItem>
                  <a
                    href={item.url}
                    className="flex items-center gap-2 [&>svg]:size-4"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                  {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center gap-2 [&>svg]:size-4">
                <LogOut />
                Log out
              </div>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
