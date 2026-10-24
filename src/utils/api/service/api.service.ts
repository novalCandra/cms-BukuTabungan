import axios from "axios";

type SchemaApiRegister = {
  name: string;
  email: string;
  phone: string;
  password: string
}
export type SchemaApiLogin = {
  email: string;
  password: string
}

export const ApiServiceRegisterAuth = (body: SchemaApiRegister) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/register`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
};

export const ApiServiceLoginAuth = (body: SchemaApiLogin) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/login`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
};
