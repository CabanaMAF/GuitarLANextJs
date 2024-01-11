import { getGuitarras } from "./tienda/page"
import { getPosts } from "./blog/page"
import Guitarra from "@/components/guitarra";
import styles from './grid.module.css'
import Post from "@/components/post";
import Curso from "@/components/curso";

export async function getCurso() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
  const { data } = await respuesta.json()

  return await data
}

export default async function Home() {

  const guitarras = await getGuitarras();
  const posts = await getPosts();
  const curso = await getCurso();

  return (
    <>
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

      <Curso
        curso={curso?.attributes}
      />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>
    </>
  )
}
