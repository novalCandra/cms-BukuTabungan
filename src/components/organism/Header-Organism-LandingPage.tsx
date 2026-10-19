import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ArrowRight, Wallet } from "lucide-react"

export default function HeaderOrganismLandingPage() {
    return (

        <NavigationMenu className={"flex flex-row max-w-full bg-background border-2 border-border h-20 px-10 tablet:px-34"}>
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
                <div className="hidden tablet:flex tablet:flex-row gap-1 items-center w-40">
                    <Button className={"bg-transparent text-muted-foreground font-heading font-bold hover:text-primary hover:bg-transparent w-22"}>Log in</Button>
                    <Button className={"bg-primary w-34 h-12 font-heading text-sm font-bold flex flex-row hover:-translate-y-1 justify-center items-center gap-2"} >Get started <ArrowRight className="size-5" /></Button>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
