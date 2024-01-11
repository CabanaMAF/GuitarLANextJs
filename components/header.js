'use client'
import Image from "next/image"
import logo from "@/public/img/logo.svg"
import Link from "next/link"
import styles from './header.module.css'
import { usePathname } from "next/navigation"

export default function Header() {

  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image src={logo.src} width={300} height={40} alt="logotype image" />
        </Link>
        <nav className={styles.navegacion}>
          <Link className={pathname === '/' ? styles.active : ''} href="/">Inicio</Link>
          <Link className={pathname === '/nosotros' ? styles.active : ''} href="/nosotros">About Us</Link>
          <Link className={pathname === '/tienda' ? styles.active : ''} href="/tienda">Shop</Link>
          <Link className={pathname === '/blog' ? styles.active : ''} href="/blog">Blog</Link>
          <Link href="/carrito">
            <Image src="/img/carrito.png" width={30} height={25} alt="cart image" />
          </Link>
        </nav>
      </div>
    </header>
  )
}