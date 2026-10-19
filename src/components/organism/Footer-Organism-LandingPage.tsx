import { Lock, Wallet } from "lucide-react";

export default function FooterLandingPage() {
    return (
        <footer className="flex flex-col  bg-white w-full h-auto border-t-2 border-border md:py-4 md:px-4 py-6 px-6 space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:py-2 md:px-2 space-y-6">
                <div className="flex flex-col space-y-2">
                    <div className="flex flex-row space-x-2 items-center">
                        <div className="bg-primary text-white px-2 py-2 rounded-md">
                            <Wallet />
                        </div>
                        <h2 className="font-heading text-2xl font-black">finexa</h2>
                    </div>
                    <p className="font-sans text-muted-foreground text-sm">A little more clarity for the things you’re saving for.</p>
                </div>

                <div className="flex flex-col h-32  w-auto md:w-160">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <ul className="font-sans text-muted-foreground text-[14px] space-y-2 md:space-y-4">
                                <li className="font-heading text-black font-bold">Expolore</li>
                                <li>features</li>
                                <li>How it works</li>
                                <li>Secutiry</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <ul className="font-sans text-muted-foreground text-[14px] space-y-2 md:space-y-4">
                                <li className="font-heading text-black font-bold">Your account</li>
                                <li>Log in</li>
                                <li>Create account</li>
                                <li>Dashboard Previews</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <ul className="font-sans text-muted-foreground text-[14px] space-y-2 md:space-y-4">
                                <li className="font-heading text-black font-bold">Need a hand?</li>
                                <li>Contact us</li>
                                <li>FAQs</li>
                                <li>Privacy & security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4">
                <span className="font-sans text-muted-foreground">&copy; 2025 Finexa. A clearer a way to save</span>
                <div className="flex flex-row gap-x-2 items-center">
                    <Lock size={18} className="text-muted-foreground" />
                    <p className="font-sans text-muted-foreground">Your information stays private</p>
                </div>
            </div>
        </footer>
    )
}
