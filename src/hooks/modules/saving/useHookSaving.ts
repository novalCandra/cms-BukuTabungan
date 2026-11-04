import { getallSavingService } from "@/utils/api/service/saving.service";
import { useEffect, useState } from "react";

interface TypeSaving {
    id: number;
    userId: number;
    Date: string;
    widrawalAmount: number;
    balance: number;
}
export const UseHookSaving = () => {
    const [saving, setSaving] = useState<TypeSaving[]>([]);
    const [DeposingSaving, setDeposit] = useState<number>(0);
    const [balance, setBalance] = useState<number>(0);
    const [wildraw, setWildraw] = useState<number>(0)
    useEffect(() => {
        async function getMySaving() {
            const token = localStorage.getItem("token")!
            const request = await getallSavingService(token);
            const wildrawRequest = request.data.reduce((id: number, item: TypeSaving) => id + item.widrawalAmount, 0)
            const balanceRequest = request.data.reduce((id: number, item: TypeSaving) => id + item.balance, 0)
            const depositRequest = request.data.reduce((id: number, item: TypeSaving) => id + item.widrawalAmount + item.balance, 0)
            setSaving(request.data)
            setDeposit(depositRequest)
            setWildraw(wildrawRequest)
            setBalance(balanceRequest)
        }
        getMySaving()
    }, [])

    const wildandraw = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(wildraw)

    const formatBalance = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(balance)


    const deposit = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(DeposingSaving)

    return { saving, wildandraw, formatBalance, deposit }
}