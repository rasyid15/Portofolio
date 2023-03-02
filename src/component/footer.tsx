import Link from "next/link"
import {BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs" 

export default function Footer() {
  return (
    <>
    <footer className="bg-black">
    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">

        <p className="text-sm font-semibold text-white text-center">© Copyright 2023. All Rights Reserved.</p>
        <p className="text-white text-center font-semibold">Made With ❤️ By Me</p>

        <div className="flex -mx-2">
            <Link href="https://www.instagram.com/rasyidrdh05/" className="mx-1 text-white hover:text-orange-400 transition-colors duration-300" aria-label="Instagram">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                <BsInstagram />
                </svg>
            </Link>

            <Link href="https://www.linkedin.com/in/rasyidrdh05/" className="mx-1 text-white hover:text-orange-400 transition-colors duration-300" aria-label="Linkedin">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <BsLinkedin />
                </svg>
            </Link>

            <Link href="https://github.com/rasyid15" className="mx-1 text-white  hover:text-orange-400 transition-colors duration-300" aria-label="Github">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <BsGithub />
                </svg>
            </Link>
        </div>
    </div>
    </footer>
    </>
  )
}
