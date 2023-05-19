import React from 'react'
//import polpImage from '/../../public/polp.png'

import Card from './Card'

const Creations = () => {
  return (
    /* Title */
    <section className="mt-[110px] ">
      <div className="text-center text-gray-light font-coda">
        <h1 className="text-3xl font-bold ">Recent Creations</h1>
      </div>
      {/* Cards */}
      <div >
        <div className="flex flex-col md:flex-row justify-center">
        <Card
            image="/polp-icon.png"
            title="POLP (Private Beta)"
            descr="Proof of Listenership Platform is a music streaming app with integrated NFTs and community management tools. Currently in private beta, so this links to the landing page."
            link="https://polp.app/"
            tech="Next.js, Typescript, Tailwind CSS, AWS, Ethereum"
            alt="Image for POLP proof of concept"
          />
          <Card
            image="/aimusic.png"
            title="AI Music Promo"
            descr="An application using OpenAI's API to generate promotional instagram posts for music releases. Future integration with POLP."
            link="https://aimusicpromo.com/"
            tech="OpenAI API, Next.js, Tailwind CSS, Amazon Cognito"
            alt="Image for POLP"
          />
        
        </div>
        <div className="flex flex-col md:flex-row mb-16 justify-center">      
        <Card
            image="/color-chords.png"
            title="Color Chords"
            descr="Push the button to randomly generate a color. A chord whose harmonic content is based on the color will play."
            link="https://www.colorchords.xyz/"
            tech="Tone.js, Tailwind CSS"
            alt="Image for Color Chords"
          />
          <Card
            image="/buddha.png"
            title="Buddha Says"
            descr="An OpenAI-based web application that allows you to speak to the buddha. Namaste."
            link="https://buddhasays.vercel.app/"
            tech="Next.js, OpenAI API"
            alt="Image of Buddha"
          />
        </div>
      </div>

    </section >
  )
}

export default Creations