import React from 'react'
//import polpImage from '/../../public/polp.png'

import Card from './Card'

const Creations = () => {
  return (
    /* Title */
    <section className="mt-[125px] ">
      <div className="text-center text-gray-light font-coda">
        <h1 className="text-3xl font-bold ">Creations</h1>
      </div>
      {/* Cards */}
      <div >
        <div className="flex flex-col md:flex-row justify-center">
        <Card
            image="/color-chords.png"
            title="Color Chords"
            descr="Push the button to randomly generate a color, which then is used to play a chord based on the color with Tone.js."
            link="https://color-chords.vercel.app/"
            tech="Tone.js"
            alt="Image for Color Chords"
          />
          <Card
            image="/buddha.png"
            title="Buddha Says"
            descr="An OpenAI-based web application that allows you to speak to the buddha. Namaste."
            link="https://github.com/mattleesounds/buddhasays"
            tech="Next.js, OpenAI API"
            alt="Image of Buddha"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-16 justify-center">      
          <Card
            image="/polp-icon.png"
            title="POLP Proof of Concept"
            descr="Stream music Prove listenership after listening to 30 seconds of each song by signing a message with your MetaMask wallet"
            link="https://github.com/Proof-of-Listenership-Protocol/MVPv1"
            tech="Ethers.js, Supabase"
            alt="Image for POLP proof of concept"
          />
          <Card
            image="/POLP2.png"
            title="POLP"
            descr="An application to stream user-generated audio content that incentivizes active music discovery"
            link="https://polp.app"
            tech="Svelte.js"
            alt="Image for POLP"
          />
        </div>
      </div>

    </section >
  )
}

export default Creations