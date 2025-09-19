import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";

/** Documents list. */
function DocumentsList(props: any) {
    return (
        <Table>
            <TableCaption>Documents</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>2020-01-02</TableCell>
                    <TableCell>Foo</TableCell>
                    <TableCell>Everything about Foo</TableCell>
                </TableRow>
            </TableBody>
        </Table>);
}

/** Documents view */
export function Documents(props: any): Element {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Document Management</CardTitle>
            </CardHeader>
            <CardContent>
                <DocumentsList/>
            </CardContent>
        </Card>

    );
}

