import Post from "@/components/post";
import styles from '../grid.module.css'

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'GuitarLa - Blog s music, Guitar selling, advises',
}

export async function getPosts() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const { data } = await respuesta.json()

  return await data
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="contenedor">
      <h1 className="heading">Blog</h1>
      <div className={styles.grid}>
        {posts?.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>

    </main>
  )
}