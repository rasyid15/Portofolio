import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Me from "/public/Me.jpg";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>
    <Navbar />
    <div className="bg-black min-h-screen md:flex items-center justify-around ">
        <div className="pt-10 pl-20">
          <Image
          src={Me}
          alt="Me"
          width={400}
          height={400}
          className=" mt-12 rounded-md"
           /> 
        </div>
           <div>
            <h2 className="text-white font-medium text-lg "> 
            Name : Muhammad Rasyid Ridho <br />
            Place of Birth : Sidoarjo <br />
            Date of Birth : October, 15 2005 <br />
            <Link className="hover:text-orange-400 transition-colors duration-300" href="https://wa.me/6282143458812"> Telp : +62 821 4345 8812 </Link>
            </h2>

            <p className="text-sm font-medium text-white mt-4">
            I`m student at Telkom Malang Vocational School. <br />
            I`m currently studying front-end development using NextJS and TailwindCSS. <br /><br />
            If you want to use my services you can <Link className="underline hover:text-orange-400 transition-colors duration-300" href={"/contact"}>contact me</Link>
            </p>
            
          </div>
       
      </div>
    <Footer />
   </>
  )
}
