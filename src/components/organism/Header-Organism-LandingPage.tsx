import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ArrowRight, Wallet } from "lucide-react"

export default function HeaderOrganismLandingPage() {
    return (
        <NavigationMenu className={"flex flex-row border-2 border-border h-20 px-2 md:px-6 lg:px-8 items-center max-w-full"}>
            <NavigationMenuList className={"flex flex-row justify-between items-center"}>
                <div className="flex flex-row justify-center space-x-2 items-center">
                    <div className="bg-primary text-white px-2 py-2 rounded-md">
                        <Wallet />
                    </div>
                    <h2 className="font-heading text-2xl font-black">finexa</h2>
                </div>
                <NavigationMenuItem className={"hidden tablet:flex tablet:flex-row tablet:justify-between tablet:gap-x-10 font-heading font-bold text-muted-foreground cursor-pointer"}>
                    <NavigationMenuLink className={"text-muted-foreground hover:text-black"}>Features</NavigationMenuLink>
                    <NavigationMenuLink className={"text-muted-foreground hover:text-black"}>How it works</NavigationMenuLink>
                    <NavigationMenuLink className={"text-muted-foreground hover:text-black"}>Security</NavigationMenuLink>
                    <NavigationMenuLink className={"text-muted-foreground hover:text-black"}>FaQs</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={"hidden md:flex lg:flex flex-row items-center"}>
                    <Button className={"hidden md:hidden lg:block bg-transparent text-muted-foreground font-heading font-bold hover:text-primary hover:bg-transparent w-22"}>Log in</Button>
                    <Button className={"bg-primary w-34 h-12 font-heading text-sm font-bold flex flex-row hover:-translate-y-1 justify-center items-center gap-2"} >Get started <ArrowRight className="size-5" /></Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
