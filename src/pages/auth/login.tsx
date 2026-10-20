"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Shield, Wallet } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaZodAuthLogin } from "@/utils/schema/schema";
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaZodAuthLogin),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmitLogin = () => {
        return console.log("testing")
    }
    return (
        <div className="flex flex-col md:flex-1 md:flex-row md:h-screen justify-center items-center">
            <div className="hidden md:flex lg:flex flex-col w-auto md:w-96 lg:w-300 md:h-screen lg:min-h-screen justify-center items-center bg-linear-to-br from-[#002236] to-primary space-y-4 relative">
                <div className="flex flex-col justify-start space-y-6 md:w-150 lg:w-190 h-84 md:px-30 lg:px-36">
                    <div className="border-2 border-gray-400/15 bg-gray-500/60 rounded-md w-12 h-12 flex flex-col items-center justify-center">
                        <Shield className="text-white" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-heading text-white">A clearer way to save</p>
                        <h1 className="md:text-3xl lg:text-5xl font-heading text-white">Your plans deserve <br /> a little more clarity.</h1>
                        <p className="font-sans text-white font-light md:text-base lg:text-[14px]">eep your savings, activity, and records together in one calm, secure space.</p>
                    </div>
                    <div className="bg-gray-500/50 w-full h-0.5 rounded-[5px]" />
                    <div className="flex flex-row space-x-2 items-center text-muted">
                        <Lock size={16} />
                        <p className="font-sans text-[12px]">Your financial information stays private</p>
                    </div>
                </div>
            </div>
            <div className="w-96 md:w-full lg:w-400 flex flex-col items-center justify-center">
                <Card className="w-full md:w-90 lg:w-160 rounded-md flex flex-col space-y-4 bg-background ring-0">
                    <CardHeader className="flex flex-col space-y-2">
                        <div className="flex flex-row md:hidden lg:hidden space-x-2 items-center">
                            <div className="text-white bg-primary px-2 py-2 rounded-sm">
                                <Wallet />
                            </div>
                            <h3 className="font-heading font-black text-xl">finexa</h3>
                        </div>
                        <p className="font-heading text-primary text-[10px] md:text-md font-bold">WELCOME BACK</p>
                        <h2 className="font-heading text-2xl font-extralight">Good to see you again.</h2>
                        <p className="font-heading text-sm text-muted-foreground">Log in to check in on your savings.</p>
                    </CardHeader>

                    <CardContent className="bg-background relative">
                        <form onSubmit={handleSubmit(onSubmitLogin)}>
                            <FieldGroup>
                                <Controller
                                    name="email" control={control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState}>
                                            <FieldLabel className="font-heading font-semibold text-[12px]">
                                                Email address
                                            </FieldLabel>
                                            <Input {...field} type="email" placeholder="you@gmail.com" className="rounded-sm h-12 px-4 py-2 text-md bg-background" />
                                            {errors.email?.message ? <span className="font-bold text-red-400">{errors.email.message}</span> : ""}
                                        </Field>
                                    )} />
                                <Controller
                                    name="password" control={control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState}>
                                            <FieldLabel className="font-heading font-semibold text-[12px]">
                                                password
                                            </FieldLabel>
                                            <Input {...field} type={`${showPassword === true ? "password" : "text"}`} placeholder="Enter Your password" className="rounded-sm h-12 px-4 py-2 text-md bg-background" />
                                            {errors.password?.message ? <span className="font-bold text-red-400">{errors.password?.message}</span> : ""}
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className={`absolute ${errors.password ? "left-86 md:left-180 lg:left-144" : "left-86 md:left-180 lg:left-144 top-33 bg-red"}`}>
                                                {showPassword === true ?
                                                    <EyeOff className="text-muted-foreground size-5" />
                                                    : <Eye className="text-muted-foreground size-5" />
                                                }
                                            </button>
                                        </Field>
                                    )} />

                                <FieldGroup className="flex flex-row justify-between items-center w-full">
                                    <Field orientation={"horizontal"}>
                                        <Checkbox id="warnings" />
                                        <FieldLabel>
                                            Remember me
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                                <Button type="submit" className={"bg-primary font-bold font-heading h-12 rounded-md text-base"}>Log in your accounts</Button>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}