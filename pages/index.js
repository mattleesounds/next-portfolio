import Hero from "./components/Hero"
import Particle from "./components/Particle"
import Blog from "./components/Blog"
import Sounds from "./components/Sounds"
import Dev from "./components/Dev"
import Dev2 from "./components/Dev2"
import Head from "next/head"

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Matt Lee</title>

      </Head>

      <Hero />
      <Particle />
      <Sounds />
    </main>

  )
}