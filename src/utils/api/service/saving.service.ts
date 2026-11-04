import axios from "axios"

export const getallSavingService = (token : string) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/saving`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
}