import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { useHookNoted } from "@/hooks/modules/noted/useHookNoted";

export default function NotedPage() {
    const { noted } = useHookNoted()
    return (
        <div className="container flex flex-col px-4 md:px-8 md:py-8 py-6 space-y-4">
            <div className="flex flex-col gap-y-2">
                <p className="font-heading text-sm text-muted-foreground">Your saving noted</p>
                <h2 className="font-heading font-bold text-3xl">My Noted</h2>
                <p className="font-heading text-sm text-muted-foreground">Your noted have saving</p>
            </div>

            {/* <div className="flex flex-col"> */}
            <Card className="rounded-sm">
                <CardHeader>
                    <CardTitle className="flex flex-col gap-y-2">
                        <h2 className="text-xl font-heading font-semibold">Noted saving for novel</h2>
                    </CardTitle>
                    <CardContent>
                        <Table className="cursor-pointer">
                            <TableHeader>
                                <TableRow className="bg-muted">
                                    <TableCell className="text-muted-foreground font-heading">ID</TableCell>
                                    <TableCell className="text-muted-foreground font-heading">Name</TableCell>
                                    <TableCell className="text-muted-foreground font-heading">deskirpisi</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {noted.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.userId}</TableCell>
                                        <TableCell>{item.notes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </CardHeader>
            </Card>
            {/* </div> */}
        </div>
    )
}
