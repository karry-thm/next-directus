import { readItems } from "@directus/sdk";
import directusClient from "./directusClient";
import { cache } from "react";

export async function plainGetPage(id: number) {
    const client = directusClient;
    const result = await directusClient.request(readItems("Pages", {
        filter: {id}
    }));

    if(result.length > 1) {
        return undefined;
    }

    return result[0];
}

const getPage = cache(plainGetPage);

export default getPage;