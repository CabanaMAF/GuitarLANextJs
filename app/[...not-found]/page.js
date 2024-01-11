import Link from "next/link";

export const metadata = {
  title: 'GuitarLA - Not found',
}

export default function NotFoundCatchAll() {
  return (
    <div>
      <p className="error">We could not found </p>
      <Link className="error-enlace" href='/'>
        Get back to home
      </Link>
    </div>
  )
}