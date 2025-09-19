import type {Route} from "./+types/home";
import {Welcome} from "../welcome/welcome";
import {Documents, getDocuments} from "../documents/documents";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

/*** This loader runs on the front-end and includes the server-side-rendered loader result */
export async function clientLoader({serverLoader, params}: Route.ClientLoaderArgs) {
    const serverData = await serverLoader();
    const documents = {documents: await getDocuments()};
    return {
        ...serverData, ...documents
    };
}

/*** This loader runs on the back-end */
export function loader({context}: Route.LoaderArgs) {
    return {message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE, documents: []};
}

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <>
            <Welcome message={loaderData.message}/>
            <Documents data={loaderData.documents}/>
        </>);
}
