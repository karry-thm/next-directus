import getPages from "@/lib/getPages";

export async function generateStaticParams() {
    const items = await getPages();

    return items.map((item) => ({
        id: item.id.toString()
    }))
}

export default async function ItemLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}