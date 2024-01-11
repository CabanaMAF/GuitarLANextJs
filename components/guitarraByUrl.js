'use client'
import { useState } from "react"
import Image from "next/image"
import styles from "@/components/guitarras.module.css"
import { useCarritoContext } from "@/context/carritoContext"

export default function GuitarraByUrl({ guitarra }) {

  const [cantidad, setCantidad] = useState(0)

  const { agregarCarrito, carrito } = useCarritoContext();


  const { nombre, descripcion, imagen, precio } = guitarra[0]?.attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Cantidad no valida')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)

  }

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url} width={600} height={400} alt={`guitar image ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <form
          onSubmit={handleSubmit}
          className={styles.formulario}
        >
          <label htmlFor="cantidad">Cantidad:</label>

          <select
            onChange={e => setCantidad(+e.target.value)}
            id="cantidad"
          >
            <option value="0">-- Selecciones --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="submit"
            value="Agregar al carrito"
          />
        </form>
      </div>
    </div>
  )
}