import type {Route} from "./+types/home";
import {Welcome} from "../welcome/welcome";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export function loader({context}: Route.LoaderArgs) {
    return {message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE};
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (<div>
        <Welcome message={loaderData.message}/>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INV02</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$1250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>);
}
