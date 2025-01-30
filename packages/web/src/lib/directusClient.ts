import { authentication, createDirectus, rest, staticToken } from "@directus/sdk";

const directusClient = createDirectus('http://localhost:8055')
    .with(staticToken('Lb60iiABkffIYiHArZ3o4GZmdwFtLDh5'))
    .with(rest());

export default directusClient;