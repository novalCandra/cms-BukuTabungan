import { ApiServiceLoginAuth, type SchemaApiLogin } from "@/utils/api/service/api.service";
import { SchemaZodAuthLogin } from "@/utils/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UseHooksAuth() {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(SchemaZodAuthLogin),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmitLogin = async (e : SchemaApiLogin ) => {
        try {
            const data = await ApiServiceLoginAuth(e)
            localStorage.setItem("token", data.data?.acctessToken)
        } catch (error) {
            return console.log(error)
        }
    };

    return {showPassword,setShowPassword, handleSubmit, control, errors, onSubmitLogin}
}