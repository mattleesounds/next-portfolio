import React from 'react'
import Navbar from './components/Navbar'
import Particle from './components/Particle'
import Gradiant from './components/Gradient'

const About = () => {
  return (
    <section>
      <Navbar />
      <div className="h-full">
        <div className="text-center text-gray-light  mt-[125px]">
          <h1 className="text-3xl font-bold font-coda">About</h1>
          <div className="bg-gray-dark m-6 mb-20 p-2 rounded lg:ml-40 lg:mr-40">
            <p className="m-5 mb-11 font-montserrat text-gray-lighter text-left leading-6">
              Hello! I am Matt Lee, a software developer who specializes in JavaScript, React, and programs that interact with the Ethereum blockchain. I am also passionate about music technology. I grew up in New Orleans and have been a musician since I was 8. Although my passions have shifted as I travel through the journey of life, creativity has always been a core part of what I enjoy and feel is meaningful. There is no greater joy to me than working hard to bring something into existence that was not there before, whether it is a website, an algorithm, a song, or a portable drum set design.
            </p>

            <p className="m-5 mb-11 font-montserrat text-gray-lighter text-left leading-6">
              I believe that technology has the potential to make the world a better place to live in, but only if things are carefully steered in that direction. This is why it is so important to me to build things that bring enable more creativity, freedom, and access for many people.
            </p>

            <p className="m-5 mb-11 font-montserrat text-gray-lighter text-left leading-6">
              I have a degree in music industry studies, and was a live sound engineer for many years, which is where my interest in technology began. From there I took some computer science classes at the University of New Orleans, worked very hard to apply myself to coding, before finally landing a software engineering apprenticeship at Revelry Labs. At Revelry, I gained a huge wealth of knowledge about web development, smart contracts, and art generation. Right after completing my apprenticeship I entered a 48-hour hackathon/pitch competition organized by Idea Village, a startup accelerator in New Orleans. Not was I able to form an awesome team around an idea I had been working on called Proof of Listenership Platform(POLP), but we won the whole thing! Winning the event led to continued work on POLP, along with help from Idea Village and a free membership in a co-working space. I am now working on POLP, as well as other fun coding projects and looking for other part/full time opportunities to further my experience.
            </p>
          </div>
        </div>

        <Particle />
        <div className="fixed bottom-0 left-0 right-0">
          <Gradiant style="bottom-gradiant" />
        </div>
      </div>

    </section >
  )
}

export default About