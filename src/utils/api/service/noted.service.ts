import axios from "axios"

export const NotedServiceUser = (token : string) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/noted`, {
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
}