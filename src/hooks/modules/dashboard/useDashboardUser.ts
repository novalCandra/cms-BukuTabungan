import type { ChartConfig } from "@/components/ui/chart";
import { getDashboardCustomer } from "@/utils/api/service/dashboars.service";
import { useEffect, useMemo, useState } from "react";

interface Transaction {
    id: number;
    userId: number;
    Date: string;
    widrawalAmount: number;
    balance: number;
}
export const useHookDashboardUsers = () => {
    const [totalSaving, setTotalSaving] = useState<number>(0)
    const [totalWildraw, setTotalWildraw] = useState<number>(0)
    const [totalWildrawAndSaving, setTotalWildrawAndSaving] = useState<number>(0)

    // grafik
    const [transaction, setTransaction] = useState<Transaction[]>([]);
    const [selectMonth, setSelectedMonths] = useState<string>("6")

    const chartConfig = {
        desktop: {
            label: "Balance",
            color: "var(--chart-1)",
        }
    } satisfies ChartConfig;

    useEffect(() => {
        async function getDataDashboard() {
            try {
                const setToken = localStorage.getItem("token")!;
                const data = await getDashboardCustomer(setToken);
                const totalSaving: number = data.data.reduce((idx: number, item: any) => idx + item.balance, 0)
                const totalWildaraw: number = data.data.reduce((idx: number, item: any) => idx + item.widrawalAmount, 0)
                const totalWildarAndSaving: number = data.data.reduce((idx: number, item_one: any) => idx + item_one?.widrawalAmount + item_one.balance, 0)
                setTotalSaving(totalSaving)
                setTotalWildraw(totalWildaraw)
                setTotalWildrawAndSaving(totalWildarAndSaving)
                setTransaction(data.data)
            } catch (error) {
                return console.error(error)
            }
        }
        getDataDashboard()
    }, [])



    const chartData = useMemo(() => {
        const numberOffMonths = Number(selectMonth)
        const now = new Date();

        // generate the selected months
        const months = Array.from({ length: numberOffMonths }, (_, index) => {
            const date = new Date(
                now.getFullYear(),
                now.getMonth() - (numberOffMonths - 1 - index), 1
            )

            return {
                key: `${date.getFullYear()}-${date.getMonth()}`,
                month: date.toLocaleString("en-US", { month: "long" })
            }
        })

        // Sort Transaction Date  
        const sortedTransactinDate = [...transaction].sort(
            (a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
        )

        // Get the latest balance for each month
        const monthBalance = new Map<string, number>();

        sortedTransactinDate.forEach((item) => {
            const date = new Date(item.Date)

            const keys = `${date.getFullYear()}-${date.getMonth()}`
            monthBalance.set(keys, Number(item.balance))
        })


        // Build chart data
        let previousBalance = 10;
        return months.map((month) => {
            const balance = monthBalance.get(month.key)

            if (balance !== undefined) {
                previousBalance = balance
            }

            return {
                month: month.month,
                desktop: previousBalance
            }
        })
    }, [transaction, selectMonth])


    const formatRupiahSaving = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(totalSaving)

    const formatRupiahWildraw = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(totalWildraw)

    const formatRupiahWildrawAndSaving = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(totalWildrawAndSaving)
    const name = localStorage.getItem("name")
    const dateNow = new Date()
    const curHr = dateNow.getHours()
    let textCurrHr: string = "Night"!

    if (curHr < 12) {
        textCurrHr = "Morning"
    } else if (curHr < 18) {
        textCurrHr = "Afternoon"
    } else {
        textCurrHr = "Night"
    }


    return {totalSaving, setTotalSaving,totalWildraw, setTotalWildraw, totalWildrawAndSaving, setTotalWildrawAndSaving, transaction, setTransaction,selectMonth, chartConfig, chartData, formatRupiahSaving, formatRupiahWildraw, formatRupiahWildrawAndSaving, name, textCurrHr, dateNow , setSelectedMonths}
}