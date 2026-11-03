import axios from "axios"
export const getDashboardCustomer = async (token: string) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/dashboard/customer`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
}

export const getDashboardPenjual = async (token: string) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/dashboard/customer`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
}