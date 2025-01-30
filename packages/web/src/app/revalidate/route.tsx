import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
    revalidatePath("/", "page");
    revalidatePath("/", "layout");
    return Response.json({msg: "OK"})
}