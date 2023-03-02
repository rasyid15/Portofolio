import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [navbar] = useState(false);
  return (
    <>
    <nav className="w-full bg-black shadow z-10 fixed">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold hover:text-orange-400 transition-colors duration-300">Muhammad Rasyid</h2>
              </Link>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white font-semibold hover:text-orange-400 transition-colors duration-300">
                  <Link href="/about">
                    About
                  </Link>
                </li>
                <li className="text-white font-semibold  hover:text-orange-400 transition-colors duration-300">
                  <Link href="/services">
                    Services
                  </Link>
                </li>
                <li className="text-white font-semibold  hover:text-orange-400 transition-colors duration-300">
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   </>
  )
}
