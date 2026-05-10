import { getStrapiData } from "@/lib/strapi";
import Image from "next/image";

export default async function Home() {
  const dataStrapi = await getStrapiData('/api/home-page')
  const data = dataStrapi.data
  console.log(data.sections)

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-700">{data.description}</p>

      <Image
        src={data.sections.image.url}
        alt="Image-hero"
      />
    </main>
  )
}