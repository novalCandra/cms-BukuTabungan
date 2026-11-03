import {
  ArrowDownLeft,
  ArrowUpRight,
  DotIcon,
  Ellipsis,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,

} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { useHookDashboardUsers } from "@/hooks/modules/dashboard/useDashboardUser";


export default function DashboardPageUsers() {
  const { selectMonth, chartConfig, chartData, formatRupiahSaving, formatRupiahWildraw, formatRupiahWildrawAndSaving, name, textCurrHr, dateNow, setSelectedMonths } = useHookDashboardUsers()
  return (
    <div className="container flex flex-col bg-background px-4 py-6 md:px-8 md:py-6 space-y-4 md md:space-y-6">
      <header className="flex flex-col space-y-2">
        <p className="uppercase font-heading text-muted-foreground text-[12px] font-bold">
          {dateNow.toDateString()}
        </p>
        <h1 className="font-heading text-2xl">Good {textCurrHr} {name}</h1>
        <p className="text-muted-foreground font-extralight text-[12px]">
          Here’s how your savings are looking today.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 space-x-0 md:gap-x-60 w-full md:max-w-full">
        <Card className="bg-primary flex-flex-col relative w-full md:w-140 h-36 md:h-40">
          <CardHeader className="flex flex-row justify-between">
            <p className="font-heading text-white font-bold">
              Total savings balance
            </p>
            <div>
              <Ellipsis className="text-white" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-row justify-between gap-x-5">
            {/* left */}
            <div className="flex flex-col space-y-2.5 w-54">
              <h2 className="font-heading text-3xl md:text-4xl text-white font-semibold">
                {formatRupiahSaving}
              </h2>
              <div className="flex flex-row justify-between items-center space-x-1">
                <div className="flex flex-row space-x-1 bg-chart-5 rounded-[5px] w-16 items-center justify-center h-6 text-white">
                  <TrendingUp size={20} />
                  <p className="font-heading text-[10px] font-bold">8.2%</p>
                </div>
                <p className="font-sans text-white text-[12px]">
                  compared to last month
                </p>
              </div>
            </div>
            {/* rigt */}
            <div className="w-36 -bottom-1 right-0 absolute">
              <svg
                className="metric-spark"
                viewBox="0 0 150 52"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 44 C20 39 20 33 38 36 S55 22 72 28 S91 12 108 19 S129 6 150 8"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 44 C20 39 20 33 38 36 S55 22 72 28 S91 12 108 19 S129 6 150 8 V52 H0Z"
                  fill="#fff"
                  opacity=".1"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-row space-x-4 w-full md:w-[100vh]">
          <Card className="w-140 relative rounded-xl h-36 md:h-40">
            <CardHeader className="flex flex-row justify-between items-center">
              <h3 className="font-heading text-black font-semibold text-[12px] md:text-sm">
                Total deposits
              </h3>
              <div className="bg-green-100 text-green-600 rounded-sm w-6 h-6  flex flex-col justify-center items-center">
                <ArrowDownLeft className="size-4 md:size-8" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4 md:space-y-4">
                <h3 className="text-2xl md:text-4xl font-heading font-bold">
                  {formatRupiahWildraw}
                </h3>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-x-2 items-center">
                    <div className="flex flex-row items-center space-x-1">
                      <ArrowUpRight className="text-chart-2 size-4" />
                      <p className="font-heading font-extralight text-[8px] md:text-[14px]">
                        <span className="text-chart-2">12.4%</span> this month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-140 relative rounded-xl h-36 md:h-40">
            <CardHeader className="flex flex-row justify-between items-center">
              <h3 className="font-heading text-black font-semibold text-[12px] md:text-sm">
                Total withdrawals
              </h3>
              <div className="bg-orange-100 text-orange-500 rounded-sm w-6 h-6  flex flex-col justify-center items-center">
                <ArrowUpRight className="size-4 md:size-6" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4 md:space-y-4">
                <h3 className="text-2xl md:text-4xl font-heading font-bold">
                  {formatRupiahWildrawAndSaving}
                </h3>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-x-2 items-center">
                    <p className="font-heading font-extralight text-[10px] md:text-[14px]">
                      3 transactions <span>this month</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-[64vh] gap-y-6 md:gap-y-4">
        <Card className="w-full h-full md:w-380 md:h-101">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex flex-col space-y-2 ">
              <CardTitle>Savings activity</CardTitle>
              <CardTitle className="text-muted-foreground text-sm">
                Your balance over time
              </CardTitle>
            </div>
            <NativeSelect
              value={selectMonth}
              onChange={(e) => setSelectedMonths(e.target.value)}
            >
              <NativeSelectOption value={"1"}>
                Latest Month 1
              </NativeSelectOption>
              <NativeSelectOption value={"2"}>
                Latest Month 2
              </NativeSelectOption>
              <NativeSelectOption value={"3"}>
                Latest Month 3
              </NativeSelectOption>
              <NativeSelectOption value={"6"}>
                Latest Month 6
              </NativeSelectOption>
              <NativeSelectOption value={"12"}>
                Latest Month 12
              </NativeSelectOption>
            </NativeSelect>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="h-full w-full md:h-56 md:w-full"
            >
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 24,
                  right: 24,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row items-center justify-between bg-transparent">
            <div className="flex flex-row gap-x-1 items-center">
              <DotIcon className="text-primary size-6" />
              <p className="font-heading font-extralight">Balance</p>
            </div>
            <p className="font-heading font-semibold text-black">
              {formatRupiahSaving} {' '}
              <span className="font-extralight text-muted-foreground">
                current
              </span>
            </p>
          </CardFooter>
        </Card>

      </section>
    </div>
  );
}
