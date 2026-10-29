import { ConfigSidebar } from "@/config/users/config.users";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarUsers() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-row justify-start gap-x-2 items-center">
            <div className="bg-primary text-white px-2 py-2 rounded-md">
              <Wallet />
            </div>
            <h2 className="font-heading text-xl font-bold text-black">
              finexa
            </h2>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>PERSONAL SPACE</SidebarGroupLabel>
          <SidebarMenu className="flex flex-col space-y-4">
            {ConfigSidebar.map((idx) => {
              const IconItem = idx.icon!
              return (
                <SidebarMenuItem key={idx.id} className={`group/item flex flex-row justify-start gap-x-2`}>
                  <SidebarMenuButton render={<Link to={idx.link!} />} className={`items-center px-4 py-4 h-10  rounded-sm cursor-pointer hover:bg-blue-200 active:bg-blue-200`} isActive={idx.isActive}>
                    <IconItem className="size-5  text-muted-foreground group-hover/item:text-primary" />
                    <p className="font-sans font-bold  text-muted-foreground group-hover/item:text-primary">
                      {idx.label}
                    </p>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
