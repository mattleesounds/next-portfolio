import Creations from "./components/Creations"
import Particle from "./components/Particle"
import Gradiant from "./components/Gradient"
import Head from "next/head"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Matt Lee</title>

      </Head>
      <Navbar />
      <Creations />
      <Particle />
      <div className="fixed bottom-0 left-0 right-0">
        <Gradiant style="bottom-gradiant" />
      </div>
    </main>

  )
}