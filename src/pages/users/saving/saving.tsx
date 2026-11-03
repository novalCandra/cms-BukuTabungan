import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDownLeft, ArrowUpRight, LockKeyhole } from "lucide-react";

export default function savingPage() {
    return (
        <div className="container flex flex-col space-y-6 px-4 py-6">
            <div className="flex flex-col space-y-4">
                <p className="font-heading text-md text-muted-foreground font-semibold">YOUR SAVINGS RECORDS</p>
                <h2 className="text-3xl font-heading">My savings</h2>
                <p className="text-sm font-heading text-muted-foreground font-semibold">Your dated deposits, withdrawals, and running balance.</p>
            </div>

            <div className="flex flex-col space-y-4">
                <Card className="bg-linear-to-r from-primary to-blue-400 rounded-md w-full h-48 flex flex-col justify-center">
                    <CardContent className="flex flex-col justify-between space-y-4">
                        <div className="flex flex-row items-center gap-x-2">
                            <LockKeyhole className="text-white" />
                            <p className="font-heading text-white">Current balance</p>
                        </div>

                        <h2 className="font-heading text-white text-4xl font-bold">$12,840</h2>

                        <p className="text-white font-heading font-semibold">Calculated from your savings records.</p>
                    </CardContent>
                </Card>

                <Card className="bg-white rounded-md h-30 w-full">
                    <CardContent className="flex flex-row flex-1 space-x-4 items-center">
                        <div className="px-2 py-2 h-12 bg-green-200 flex flex-col justify-center items-center rounded-md">
                            <ArrowDownLeft className="size-8 text-green-500" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="font-heading">Total deposits</p>
                            <h2 className="text-2xl font-heading font-bold">$13,340</h2>
                            <p>8 deposit records</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white rounded-md h-30 w-full">
                    <CardContent className="flex flex-row flex-1 space-x-4 items-center">
                        <div className="px-2 py-2 h-12 bg-orange-200 flex flex-col justify-center items-center rounded-md">
                            <ArrowUpRight className="size-8 text-chart-3" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="font-heading">Total deposits</p>
                            <h2 className="text-2xl font-heading font-bold">$500</h2>
                            <p>8 deposit records</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <section>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h2 className="text-xl font-heading">Savings history</h2>
                            <p className="font-heading text-sm text-muted-foreground">This view is read-only.</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted font-bold">
                                    <TableHead className="font-bold font-sans text-muted-foreground">DATE</TableHead>
                                    <TableHead className="font-bold font-sans text-muted-foreground">DEPOSIT</TableHead>
                                    <TableHead className="font-bold font-sans text-muted-foreground">WITHDRAWAL</TableHead>
                                    <TableHead className="font-bold font-sans text-muted-foreground">BALANCE</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>March 24, 2025</TableCell>
                                    <TableCell>$450</TableCell>
                                    <TableCell>—</TableCell>
                                    <TableCell>$12,840</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}