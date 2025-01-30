import getPages from "@/lib/getPages";

export const revalidate = 0;

export default async function Home() {
  const items = await getPages();
  const item = items[0];

  return <div dangerouslySetInnerHTML={{__html: item.Body}}>
  </div>
}
