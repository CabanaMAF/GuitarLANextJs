import Image from "next/image"
import styles from "./nosotros.module.css"
export const metadata = {
  title: 'GuitarLA - About Us',
  description: 'GuitarLa - Ours Guitar sells and music blog',
}

export default function Nosotros() {
  return (
    <main className="contenedor">
      <h1 className="heading">About Us</h1>
      <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="About us image" />
        <div>
          <p>I don t know how to put in here but there is still have some text here.</p>
          <p>This is the second paragraphs or paragrafs, well I think this would be okey</p>
        </div>
      </div>
    </main>
  )
}