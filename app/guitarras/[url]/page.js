import GuitarraByUrl from "@/components/guitarraByUrl"

export async function getGuitarra(url) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data } = await respuesta.json()

  return await data
}

export default async function Producto({ params }) {

  const guitarra = await getGuitarra(params.url);

  if (guitarra.length === 0) {
    return (
      <p className="error">The product doesn t exist</p>
    )
  }

  return (
    <GuitarraByUrl
      guitarra={guitarra}
    />

  )
}