import { revalidatePath } from "next/cache"

export async function GET(_request: Request) {
    revalidatePath("/", "page");
    revalidatePath("/", "layout");
    return Response.json({ msg: "OK" })
}

export async function POST(req: Request) {
    const {key, keys} = await req.json();

    if(typeof key === "number") {
        revalidatePath(`/${key}`, "page")
    }

    if(Array.isArray(keys)) {
        if(keys.length > 0) {
            revalidatePath(`/${keys[0]}`, "page")
        }
    }

    revalidatePath('/', "layout");
    
    return Response.json({msg: "Hallo Welt!"});
}