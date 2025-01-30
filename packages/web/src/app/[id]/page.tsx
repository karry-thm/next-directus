import getPage from "@/lib/getPage"
import { notFound } from "next/navigation";

export const dynamic = 'force-static';

export default async function IdPage({ params }: { params: Promise<{ id: string }> }) {
    const page = await getPage(parseInt((await params).id));

    if (page) {
        return <div>
            <h1>{page.Title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.Body}}></div>
        </div>
    }

    notFound();
}