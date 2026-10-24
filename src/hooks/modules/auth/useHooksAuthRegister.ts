import { SchemaRegister } from "@/utils/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function UseHooksAuthRegister() {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(SchemaRegister),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
        },
    });
    const onSubmitLogin = async (e : object) => {
        try {
            const data = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
                headers: {
                    "Content-Type": "applicatin/json"
                },
                body: JSON.stringify(e)
            })
            localStorage.setItem("token", data.data?.acctessToken)
            navigate("/login")
        } catch (error) {
            return console.log(error)
        }
    };

    return {showPassword, setShowPassword, handleSubmit, control, errors, onSubmitLogin}
}