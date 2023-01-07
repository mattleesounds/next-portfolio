import React from 'react'
import Particle from './components/Particle'
import Gradiant from './components/Gradient'
import Navbar from './components/Navbar'
import { TiSocialTwitter, TiSocialLinkedin, TiSocialYoutube, TiSocialGithub } from 'react-icons/ti'
import Link from 'next/link'

const Socials = () => {
  return (
    <section>
      <Navbar />
      <div className="text-center text-gray-light font-coda mt-[125px]">
        <h1 className="text-3xl font-bold ">Socials</h1>
      </div>
      <div className="flex-col ">
        <div className="flex justify-center">
          <Link href="https://twitter.com/matt_p_lee">
            <TiSocialTwitter size={100} className="fill-[#8D94BA] m-10" />
          </Link>
          <Link href="https://github.com/mattleesounds">
            <TiSocialGithub size={100} className="fill-[#8D94BA] m-10" />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://www.youtube.com/channel/UC1oGCdPL85Wi8cpvr9Ul-3A">
            <TiSocialYoutube size={100} className="fill-[#8D94BA] m-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/matt-lee-9aa927138/">
            <TiSocialLinkedin size={100} className="fill-[#8D94BA] m-10" />
          </Link>
        </div>
      </div>
      <div>
        <Particle />
        <div className="fixed bottom-0 left-0 right-0">
          <Gradiant style="bottom-gradiant" />
        </div>
      </div>
    </section>
  )
}

export default Socials