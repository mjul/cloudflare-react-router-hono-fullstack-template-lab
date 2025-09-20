import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import type {ReactNode} from "react";

/** Document Entity */
export interface Document {
    id: number,
    title: string,
    description: string,
    date: string,
}

/** Get the documents from the database */
export async function getDocuments(): Promise<Document[]> {
    const res = await fetch(`/api/documents`);
    const body = await res.json();
    // TODO: validate
    if (!body) {
        throw new Error("documents endpoint returned null body");
    }
    if (!body["data"]) {
        throw new Error("body has no data property");
    }
    console.log({getDocuments: body});
    const docs: Document[] = body.data.map(
        ({id, title, date, description, sortIndex}) => {
            return {id, title, description, date};
        }
    );
    return docs;
}

/** Documents list. */
function DocumentsList({data}: { data: Document[] }) {
    const documents = data ? data : [];
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
                {documents.map((doc: Document) => (
                    <TableRow>
                        <TableCell className="font-medium">{doc.id}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>{doc.title}</TableCell>
                        <TableCell>{doc.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>);
}

/** Documents view */
export function Documents({data}: { data: Document[] }): ReactNode {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Document Management</CardTitle>
            </CardHeader>
            <CardContent>
                <DocumentsList data={data}/>
            </CardContent>
        </Card>
    );
}

