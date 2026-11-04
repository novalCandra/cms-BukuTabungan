import { NotedServiceUser } from "@/utils/api/service/noted.service";
import { useEffect, useState } from "react";

interface TypeNoted {
    id: number;
    userId: number;
    notes: string;
}

export const useHookNoted = () => {
    const [noted, getNoted] = useState<TypeNoted[]>([]);

    useEffect(() => {
        async function getNotedData() {
            const token = localStorage.getItem("token")!
            const request = await NotedServiceUser(token);
            getNoted(request.data)
        }

        getNotedData()
    }, [])

    return { noted }
}