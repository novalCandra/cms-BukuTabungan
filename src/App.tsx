import { ArrowRight, ChartNoAxesCombined, Check, Lock, Shield, Users, Wallet } from "lucide-react"
// import { Badge } from "./components/ui/badge"
import { Avatar, AvatarGroup, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import GifImage from "../public/gif/finexa_dashboard.gif"
import GifImageResponsice from "../public/gif/finexa_mobile.gif"
import { Card, CardContent, CardHeader } from "./components/ui/card"
import { ChartContainer, type ChartConfig } from "./components/ui/chart"
import { Bar, BarChart, CartesianGrid } from "recharts"
import { dataChart } from "./utils/data/dumy"
import { Link } from "react-router-dom"
function App() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <div className="container flex flex-col min-h-screen relative justify-center items-center bg-background max-w-full">
      <section className="flex flex-col space-y-10 md:space-y-8 text-center justify-center items-center h-250 md:h-300">
        <div className="w-100 md:w-250 space-y-6 md:space-y-8 flex flex-col">
          <h1 className="font-heading text-5xl md:text-7xl font-bold">Manage your savings
            with <span className="text-secondary-foreground">confidence.</span></h1>
          <p className="font-sans md:font-heading text-muted-foreground text-md md:text-xl">A simpler, clearer way to build your future. Track every deposit, keep an eye on your goals, and know exactly where you stand.</p>

          <div className="flex flex-row justify-center space-x-6">
            <Button className={"bg-primary w-48 h-14 md:w-50 md:h-12 font-heading text-sm font-bold flex flex-row hover:-translate-y-1 justify-center items-center gap-2 text-white rounded-md"}>Start Learning today <ArrowRight /> </Button>
            <Button className={"bg-white text-black w-48 h-14 md:w-50 md:h-12 font-heading text-sm font-bold flex flex-row hover:-translate-y-1 justify-center items-center gap-2 border-2 border-border rounded-md"}>See how it works<ArrowRight /> </Button>
          </div>

          <div className="flex flex-row space-x-2 md:spcae-x-4 w-100 md:w-140 items-center px-0.4 justify-center mx-auto ">
            {/* lEFT */}
            <div className="flex flex-row gap-2 md:gap-2 border-r-2 w-60 md:w-80 border-border items-center">
              <AvatarGroup>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                </Avatar>
              </AvatarGroup>
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-[12px] md:text-sm text-start">Trusted to keep every detail clear</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-row gap-x-1 md:gap-x-2 items-center">
              <Lock className="size-5 text-chart-2" />
              <p className="font-heading md:text-sm font-light text-[12px]">Private by design</p>
            </div>
          </div>

          {/* GIF Image */}
          <div className="flex flex-col justify-center items-center w-100 md:w-250 h-110 md:h-auto">
            <img src={GifImage} alt="gif" className="hidden md:block w-100 md:w-260 h-96 md:h-150" />
            <img src={GifImageResponsice} alt="gif" className="h-120 md:hidden lg:hidden" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-white w-full h-280 md:h-200 space-y-8 border-2 border-border">
        <div className="space-y-2 md:space-y-5 flex flex-col text-center w-100 md:w-120">
          <p className="font-heading text-md text-primary">A clearer view of your money</p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium">Your savings, without
            the question marks.</h2>
          <p>Everything you need to stay on top of your progress, all in one calm and considered place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-6 space-y-4 md:space-y-0">
          <Card className="w-96 h-70">
            <CardHeader>
              <div className="bg-blue-200 text-primary px-2 py-2 rounded-md w-10">
                <ChartNoAxesCombined />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="font-heading text-xl">Know where you stand</h3>
                <p className="font-sans text-muted-foreground">See your balance, deposits, and withdrawals at a glance. Your savings story, always up to date.</p>
              </div>
              <ChartContainer config={chartConfig} className="min-h-10 w-full">
                <BarChart accessibilityLayer data={dataChart}>
                  <CartesianGrid vertical={false} />
                  <Bar dataKey="dekstop" fill="var(--color-dekstop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="w-96 h-70">
            <CardHeader>
              <div className="bg-blue-200 text-primary px-2 py-2 rounded-md w-10">
                <ChartNoAxesCombined />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="font-heading text-xl">Know where you stand</h3>
                <p className="font-sans text-muted-foreground">See your balance, deposits, and withdrawals at a glance. Your savings story, always up to date.</p>
              </div>
              <ChartContainer config={chartConfig} className="min-h-10 w-full">
                <BarChart accessibilityLayer data={dataChart}>
                  <CartesianGrid vertical={false} />
                  <Bar dataKey="dekstop" fill="var(--color-dekstop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="w-96 h-70">
            <CardHeader>
              <div className="bg-blue-200 text-primary px-2 py-2 rounded-md w-10">
                <ChartNoAxesCombined />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="font-heading text-xl">Know where you stand</h3>
                <p className="font-sans text-muted-foreground">See your balance, deposits, and withdrawals at a glance. Your savings story, always up to date.</p>
              </div>
              <ChartContainer config={chartConfig} className="min-h-10 w-full">
                <BarChart accessibilityLayer data={dataChart}>
                  <CartesianGrid vertical={false} />
                  <Bar dataKey="dekstop" fill="var(--color-dekstop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col md:flex-1 md:flex-row h-160 md:h-600  md:justify-center md:space-x-10 py-6 px-6 md:py-12 md:px-6 space-y-4 w-full">
        {/* Right */}
        <div className="flex flex-col justify-start space-y-4 md:space-y-5 w-160">
          <p className="text-primary text-md md:text-xl font-mono uppercase">It feels good to know</p>
          <h2 className="font-heading text-3xl md:text-4xl">Start small. <br />
            See the difference.</h2>
          <p className="text-muted-foreground font-sans md:text-xl w-96 md:w-140">Getting a handle on your savings should feel easy. We make each step clear, from your first deposit to your next milestone.</p>
          <Link to={"/login"} className="flex flex-row items-center gap-2 font-sans text-primary font-semibold">Create your free accounts <ArrowRight size={18} /></Link>
        </div>
        {/* left */}
        <div className="flex flex-col space-y-4 w-auto md:w-200">
          <div className="flex flex-row justify-between py-4 px-4 border-t-2 border-border w-full items-center">
            <div className="flex flex-row gap-x-3 items-center">
              <p className="font-heading text-xl text-muted-foreground">01</p>
              <div className="flex flex-col space-y-0.8">
                <h3 className="font-heading text-md md:text-xl">Set up your accounts</h3>
                <p className="font-sans text-[11px]">Create your personal profile in just a few minutes.</p>
              </div>
            </div>
            <div className="bg-blue-100 text-primary px-2 py-2 rounded-md">
              <Users />
            </div>
          </div>
          <div className="flex flex-row justify-between py-4 px-4 border-t-2 border-border w-full items-center">
            <div className="flex flex-row gap-x-3 items-center">
              <p className="font-heading text-xl text-muted-foreground">02</p>
              <div className="flex flex-col space-y-0.8">
                <h3 className="font-heading text-md md:text-xl">Make saving a habit</h3>
                <p className="font-sans text-[11px]">Your savings officer records deposits and keeps your balance current.</p>
              </div>
            </div>
            <div className="bg-blue-100 text-primary px-2 py-2 rounded-md">
              <Wallet />
            </div>
          </div>
          <div className="flex flex-row justify-between py-4 px-4 border-t-2 border-border w-full items-center">
            <div className="flex flex-row gap-x-3 items-center">
              <p className="font-heading text-xl text-muted-foreground">03</p>
              <div className="flex flex-col space-y-0.8">
                <h3 className="font-heading text-md md:text-xl">
                  Follow your progress</h3>
                <p className="font-sans text-[11px]">See every transaction and download your records whenever you need.</p>
              </div>
            </div>
            <div className="bg-blue-100 text-primary px-2 py-2 rounded-md">
              <ChartNoAxesCombined />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full justify-center py-10 items-center bg-white border-t-2 border-border">
        <Card className="w-96 md:w-400 h-120 md:h-96">
          <CardContent className="flex flex-col md:flex-1 md:flex-row md:justify-between space-y-4 bg">
            <div className="flex flex-col justify-center items-center mx-auto">
              <div className="bg-primary text-white h-20 w-20 md:h-40 md:w-40 rounded-2xl flex flex-col items-center  justify-center">
                <Shield className="size-11 md:size-28" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-auto md:space-y-2 md:w-200">
              <p className="uppercase text-primary font-sans text-sm font-medium">Transparency is part of trust</p>
              <div className="flex flex-col space-y-6 w-auto md:w-170">
                <h3 className="text-2xl md:text-5xl font-heading font-semibold">Your money. Your records. <br /> <span className="text-primary">Always in your hands.</span></h3>

                <p className="font-sans text-muted-foreground text-sm md:text-xl">We believe you should always know what’s happening with your savings. Your account is private, your transaction history is clear, and every statement is yours to keep.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 space-y-4">
                  <div className="flex flex-row items-center gap-x-2">
                    <Check className="text-green-400" />
                    <p className="font-sans text-base text-muted-foreground">Personal financial information</p>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <Check className="text-green-400" />
                    <p className="font-sans text-base text-muted-foreground">Verified transaction history</p>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <Check className="text-green-400" />
                    <p className="font-sans text-base text-muted-foreground">Downloadable PDF records</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default App
