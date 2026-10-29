import SidebarUsers from '@/components/organism/SidebarUsers';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Menu, Wallet } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import ImageProfile from "../../public/users/image.jpg"
const layoutUsersPage = () => {
    return (
        <SidebarProvider>
            <SidebarUsers />
            <main>
                <NavigationMenu className={"flex flex-row md:hidden lg:hidden border-2 border-border bg-white h-20 px-4 md:px-6 lg:px-8 items-center max-w-full"}>
                    <NavigationMenuList className={"flex flex-row justify-between items-center"}>
                        <div className="flex flex-row justify-center space-x-2 items-center">
                            <div className="bg-primary text-white px-2 py-2 rounded-md">
                                <Wallet />
                            </div>
                            <h2 className="font-heading text-2xl font-black">finexa</h2>
                        </div>
                        <NavigationMenuItem className={"block"}>
                            <Button className={"bg-secondary text-primary w-14 h-10"}><Menu size={16} /></Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu className={"flex flex-row justify-between items-center py-4 px-4 bg-white max-w-full md:w-[174vh] h-22 border-b-2 border-border"}>
                    <div className="flex flex-row gap-x-1 text-[12px]">
                        <span className="font-sans text-muted-foreground">Workspace</span> / <span className="font-sans font-black">Overview</span>
                    </div>
                    <div className="flex flex-row space-x-4 items-center">
                        <Avatar>
                            <AvatarImage
                                src={ImageProfile}
                                alt="@shadcn"
                            />
                        </Avatar>
                    </div>
                </NavigationMenu>
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
export default layoutUsersPage