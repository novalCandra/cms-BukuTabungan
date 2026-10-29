import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  DotIcon,
  Download,
  Ellipsis,
  Plus,
  ShieldCheck,
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
  type ChartConfig,
} from "@/components/ui/chart";
import { CartesianGrid, Dot, Line, LineChart } from "recharts";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
export default function DashboardPageUsers() {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
      color: "var(--chart-2)",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Firefox",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Edge",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;
  return (
    <div className="container flex flex-col bg-background px-4 py-6 md:px-8 md:py-6 space-y-4 md md:space-y-6">
      <header className="flex flex-col space-y-2">
        <p className="uppercase font-heading text-muted-foreground text-[12px] font-bold">
          Monday, Octo 24, 2025
        </p>
        <h1 className="font-heading text-2xl">Good Morning Sabcan</h1>
        <p className="text-muted-foreground font-extralight text-[12px]">
          Here’s how your savings are looking today.
        </p>
        <button className="flex flex-row w-48 h-11 bg-white border-2 border-border px-3 gap-x-3 text-muted-foreground items-center rounded-sm">
          <Download size={18} className="text-primary" />
          <p className="font-heading text-[12px] font-bold">
            Download Statements
          </p>
        </button>
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
                $12,840<sub className="text-secondary">.50</sub>
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
                  $14,260.<sub className="text-muted-foreground">00</sub>
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
                  $1,420.<sub className="text-muted-foreground">00</sub>
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
        <Card className="w-full h-full md:w-250 md:h-96">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex flex-col space-y-2 ">
              <CardTitle>Savings activity</CardTitle>
              <CardTitle className="text-muted-foreground text-sm">
                Your balance over time
              </CardTitle>
            </div>
            <NativeSelect>
              <NativeSelectOption value={"month_six"}>
                Latest Month 6
              </NativeSelectOption>
              <NativeSelectOption value={"month_five"}>
                Latest Month 5
              </NativeSelectOption>
              <NativeSelectOption value={"month_four"}>
                Latest Month 4
              </NativeSelectOption>
              <NativeSelectOption value={"month_three"}>
                Latest Month 3
              </NativeSelectOption>
              <NativeSelectOption value={"month_two"}>
                Latest Month 2
              </NativeSelectOption>
              <NativeSelectOption value={"month_one"}>
                Latest Month 1
              </NativeSelectOption>
            </NativeSelect>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="h-full w-full md:h-56 md:w-full"
            >
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <CartesianGrid vertical={false} />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      nameKey="visitors"
                      hideLabel
                    />
                  }
                />

                <Line
                  dataKey={"visitors"}
                  type={"natural"}
                  strokeWidth={2}
                  dot={({ payload, ...props }) => {
                    return (
                      <Dot
                        key={payload.browser}
                        r={5}
                        cx={props.cx}
                        cy={props.cy}
                        fill={props.fill}
                        stroke={payload.fill}
                      />
                    );
                  }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row items-center justify-between bg-transparent">
            <div className="flex flex-row gap-x-1 items-center">
              <DotIcon className="text-primary size-6" />
              <p className="font-heading font-extralight">Balance</p>
            </div>
            <p className="font-heading font-semibold text-black">
              $12,840.50{" "}
              <span className="font-extralight text-muted-foreground">
                current
              </span>
            </p>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-120 md:h-96 h-full">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="flex flex-col space-y-1">
              <h2 className="font-heading font-semibold">Savings overview</h2>
              <p className="text-muted-foreground text-[12px]">
                Your account at a glance
              </p>
            </CardTitle>
            <CardTitle>
              <Ellipsis className="size-6 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <Card className="bg-linear-to-br from-[#001442] via-[#001442] to-[#5ca3ff]  relative rounded-md w-full h-44">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle className="flex flex-row space-x-1 items-center">
                  <h2 className="font-heading text-white font-bold text-base">
                    FINEXA
                  </h2>
                  <p className="font-sans text-muted-foreground text-[12px] absolute left-19 top-6">
                    PERSONAL
                  </p>
                </CardTitle>
                <div>
                  <ShieldCheck className="text-white size-5" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col space-y-4">
                {/* <Table className="text-white size-10" /> */}
                <div className="flex flex-col space-y-2">
                  <p className="font-mono text-muted-foreground text-[10px]">
                    CURRENT BALANCE
                  </p>
                  <h2 className="text-white text-2xl">$12,840.50</h2>
                  <div className="flex flex-row justify-between items-center font-sans text-white text-[12px]">
                    <p>JORDAN DAVIS</p>
                    <p>•••• 4829</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center space-y-2">
                <p className="font-heading font-extralight">Account status</p>
              </div>
              <p className="font-sans font-extralight">Active</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center space-y-2">
                <p className="font-heading font-extralight">Account ID</p>
              </div>
              <p className="font-sans font-extralight">FX-208491</p>
            </div>
            <div className="flex flex-row justify-center space-x-1 items-center bg-white">
              <p className="text-primary">View my savings</p>{" "}
              <ArrowRight className="text-primary size-4" />
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-[160vh]">
          <CardHeader className="flex flex-row justify-between items-center space-x-2">
            <CardTitle className="flex flex-col">
              <h2 className="font-heading text-sm">Recent transactions</h2>
              <p className="font-heading text-[10px]">
                A clear record of your savings activity
              </p>
            </CardTitle>
            <CardTitle>
              <Link
                to={"/transaction"}
                className="flex flex-row gap-x-1 text-[12px] items-center text-primary"
              >
                View all transaction <ArrowRight className="size-4" />
              </Link>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hidden md:flex md:flex-row md:justify-between">
                  <TableHead>TRANSACTION</TableHead>
                  <TableHead>REFERENCE</TableHead>
                  <TableHead>TYPE</TableHead>
                  <TableHead>DATE</TableHead>
                  <TableHead>AMOUNT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="flex flex-row justify-between items-center">
                  <TableCell className="flex flex-row space-x-2 justify-center items-center">
                    <div className="bg-blue-200 text-sm text-primary font-sans px-2 py-1 rounded-[5px]">
                      <p className="uppercase text-[10px]">ms</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <p className="font-sans text-[12px] font-semibold">
                        Monthly savings
                      </p>
                      <p className="font-sans text-[12px] text-muted-foreground">
                        Mar 24, 2025 · 10:42 AM
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:block">
                    <p>TXN-28491</p>
                  </TableCell>
                  <TableCell className="hidden md:block">
                    <Badge>Deposit</Badge>
                  </TableCell>
                  <TableCell className="hidden md:block">
                    <p>Mar 24, 2025 · 10:42 AM</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center space-x-0.5">
                      <Plus className="size-4 text-green-600" />
                      <p className="text-chart-2 text-sm">$450.00</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="bg-white flex flex-row justify-between items-center">
            <p className="font-heading text-[10px]">
              Showing <span className="font-heading font-bold">4</span> of{" "}
              <span className="font-heading font-bold">24</span> transactions
            </p>
            <Link
              to={"/"}
              className="text-primary flex flex-row items-center gap-x-1 text-[10px]"
            >
              See transaction history <ArrowRight className="size-3" />
            </Link>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
