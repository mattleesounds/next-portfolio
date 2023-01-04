import React from 'react'
//import polpImage from '/../../public/polp.png'

import Card from './Card'

const Creations = () => {
  return (
    /* Title */
    <section className="mt-[125px] ">
      <div className="text-center text-gray-light font-baloo">
        <h1 className="text-3xl font-bold ">Creations</h1>
      </div>
      {/* Cards */}
      <div >
        <div className="flex flex-col md:flex-row justify-center">
          <Card
            image="/polp.png"
            title="POLP"
            descr="An application to stream user-generated audio content that incentivizes active music discovery by offering listeners the chance to become a part of the communities of the artists they support."
            link="https://polp.app" />
          <Card
            image="/buddha.png"
            title="Buddha Says"
            descr="An OpenAI-based web application that allows you to speak to the buddha. Namaste." />
        </div>
        <div className="flex flex-col md:flex-row mb-16 justify-center">
          <Card
            image="/polp-icon.png"
            title="POLP Proof of Concept"
            descr="An application to stream my EP, Serene Wrap. You can prove listenership after listening to 30 seconds of each song by signing a messgae with your MetaMask wallet" />
          <Card
            image="/color-chords.png"
            title="Color Chords"
            descr="Push the button to randomly generate a color, which then is used to play a chord based on the color with Tone.js." />
        </div>
      </div>

    </section >
  )
}

export default Creations