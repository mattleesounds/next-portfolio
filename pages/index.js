import Hero from "./components/Hero"
import Particle from "./components/Particle"
import Blog from "./components/Blog"
import Sounds from "./components/Sounds"
import Dev from "./components/Dev"

export default function Home() {
  return (
    <main>
      <Hero />
      <Particle />
      <Sounds />
      <Dev />
      <Blog />
    </main>
  )
}