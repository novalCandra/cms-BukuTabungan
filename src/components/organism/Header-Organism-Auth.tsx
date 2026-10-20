
import {ArrowLeft, Wallet } from 'lucide-react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import { Link } from 'react-router-dom'

export default function HeaderOrganismAuth() {
    return (
        <NavigationMenu className={"flex flex-row border-2 border-border h-20 px-2 md:px-6 lg:px-8 items-center max-w-full"}>
            <NavigationMenuList className={"flex flex-row justify-between items-center"}>
                <div className="flex flex-row justify-center space-x-2 items-center">
                    <div className="bg-primary text-white px-2 py-2 rounded-md">
                        <Wallet />
                    </div>
                    <h2 className="font-heading text-2xl font-black">finexa</h2>
                </div>
                <NavigationMenuItem className={"hidden md:flex lg:flex flex-row items-center"}>
                    <Link to={"/"} className={"flex flex-row items-center justify-center gap-x-2 text-muted-foreground font-heading font-bold hover:text-primary hover:bg-transparent w-40"}>
                    <ArrowLeft size={18} />
                    <p className='text-sm'>Back to home</p>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
