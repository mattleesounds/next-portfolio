import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <a href={props.link} >
      <div className="max-w-md flex bg-gray-dark m-6 rounded
       border-solid border-2 border-gray-light hover:border-[#B4EDD2]">
        <div className=" w-3/6 relative h-52 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden m-1 cursor-pointer" title="polp">
          <Image style={{ objectFit: 'contain' }}
            src={props.image}
            fill
            quality={100}
            alt={props.alt}
          />
        </div>
        {/* <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

        </div> */}
        <div className="text-gray-lighter m-1 w-3/6 font-montserrat grid">
          <h1 className="place-content-center text-xl font-bold font-underline ">{props.title}</h1>
          <p className="text-sm"> {props.descr} </p>
          <p className="text-[#B4EDD2]">Tech: {props.tech}</p>
        </div>
      </div>
    </a>
  )
}

export default Card