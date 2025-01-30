import { readItems } from "@directus/sdk";
import directusClient from "./directusClient";
import { cache } from "react";

export async function plainGetPages():Promise<any[]> {
    const client = directusClient;
    return await directusClient.request(readItems("Pages"));
}

const getPages = cache(plainGetPages);

export default getPages;