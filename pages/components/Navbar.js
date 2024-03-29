import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Gradiant from './Gradient'

const Navbar = () => {
  const [nav, setNav] = React.useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-gray-dark">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-gray-lighter ease-in duration-300">
        <Link href="/">
          <h1 className="font-coda font-bold text-4xl text-opacity-0 text-gray bg-clip-text bg-gradient-to-r from-[#A0CFD3] to-[#9A7AA0]">Matt Lee</h1>
        </Link>
        <ul className="hidden md:flex font-coda text-gray-lighter">
          <li className="p-4 hover:text-[#B4EDD2]">
            <Link href="/">Creations</Link>
          </li>
          <li className="p-4 hover:text-[#8D94BA]">
            <Link href="/Socials">Socials</Link>
          </li>
          <li className="p-4 hover:text-[#9A7AA0]">
            <Link href="https://paragraph.xyz/@matt">Blog</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button className="block md:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-dark text-center ease-in duration-300"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-dark text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-[#B4EDD2]">
              <Link href="/">Creations</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#8D94BA]">
              <Link href="/Socials">Socials</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#9A7AA0]">
              <Link href="https://paragraph.xyz/@matt">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <Gradiant style="nav-gradiant" />
    </div>
  )
}

export default Navbar