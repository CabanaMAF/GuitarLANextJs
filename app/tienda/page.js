import Guitarra from "@/components/guitarra"
import styles from '../grid.module.css'

export const metadata = {
  title: 'GuitarLA - Shop',
  description: 'GuitarLa - Virtual Guitar sells, instruments and music',
}


export async function getGuitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data } = await respuesta.json()

  return await data
}

export default async function Tienda() {
  const guitarras = await getGuitarras();

  return (
    <main className="contenedor">
      <h1 className="heading">Our Colection</h1>
      <div className={styles.grid}>
        {guitarras?.map(guitarra => (
          <Guitarra
            key={guitarra.id}
            guitarra={guitarra.attributes}

          />
        ))}
      </div>
    </main>
  )
}
