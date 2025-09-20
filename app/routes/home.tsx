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

// By default, client loaders do not run on the initial page load, only
// on subsequent navigations. If you want a client loader to run
// on the first page load, you can set the `hydrate` property to `true`
// to force the client loader to run during hydration
// We do this here because we set the document list to empty in the server loader.
clientLoader.hydrate = true as const; // `as const` for type inference

export default function Home({loaderData}: Route.ComponentProps) {
    return (
        <>
            <Welcome message={loaderData.message}/>
            <Documents data={loaderData.documents}/>
        </>);
}
