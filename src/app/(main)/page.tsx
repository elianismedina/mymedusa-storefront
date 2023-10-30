import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inicio | A&E Cueros",
  description:
    "Compra qui los mas destacado en articulos de cuero para hombre y mujer.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
