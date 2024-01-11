import Image from "next/image"
import { formatearFecha } from "@/helpers/formatearFecha"
import styles from '../../../components/blog.module.css'

export async function getPost(url) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const { data } = await respuesta.json()

  return await data
}

export default async function Post({ params }) {
  const post = await getPost(params.url)

  if (post.length === 0) {
    return (
      <p className="error">The blog doesn t exist</p>
    )
  }

  const { titulo, contenido, imagen, publishedAt } = post[0]?.attributes

  return (
    <article className={`${styles.post} ${styles['mt-3']}`}>
      <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`Blog image ${titulo}`} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido}</p>
      </div>
    </article>
  )
}