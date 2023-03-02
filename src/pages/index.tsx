import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Mejpg from "/public/Me.jpg";
import Banner from "/public/Banner Design.png";
import Mobile from "/public/Mobile Design.png";
import Web from "/public/Web Design.png";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
      <div className="bg-black min-h-screen">
        <div className=" pt-10 md:pt-0 md:pl-[100px]">
          <div className="flex md:flex-row md:pt-0 pt-20  flex-col justify-center items-center">
            <div className="w-6/12 space-y-2">
              <h1 className="text-4xl font-bold text-white">Muhammad Rasyid Ridho</h1>
              <h2 className="text-xl font-semibold text-slate-200">Junior Front End Developer</h2>
              <p className="text-xs font-medium text-slate-200 ">Hi, My Name Muhammad Rasyid Ridho. I`m student at Telkom Malang Vocational School.<br />
              Welcome to my portofolio website.         
              </p>
              <Link href={"https://drive.google.com/uc?id=1l9HIA85CpBzofTXm4sCg1iGRrLxsaJS0&export=download"}>
              <button className="text-xl mt-5 px-4 py-1 text-orange-400 font-bold bg-white rounded-2xl text-center hover:bg-orange-400 hover:text-white transition-colors duration-300">Download CV</button>
              </Link>
            </div>
            <div className="w-6/12">
              <div className="flex justify-center md:justify-end pt-10 md:pl-0 pl-8">

            <Image
            src={Mejpg}
            alt="Me"
            width={400}
            height={400}
            className=" mr-28 mt-12 rounded-md"
            />
              </div>
            </div>
          
          </div>
        </div>
        <div className="mt-32">
          <div className=" text-white flex justify-center text-4xl font-bold">
            Portofolio
          </div>
          <div className="grid gap-4 pb-10 lg:grid-cols-3 mr-12">
            <div className="mt-12 ml-24 w-full max-w-xs overflow-hidden bg-white rounded-lg ">
              <Image
              src={Web}
              alt="Web"
              width={200}
              height={200}
              className="object-cover w-full h-64 mt-3" 
              />
              <div className="p-2 ">
                <h4 className=" block text-xl font-semibold text-gray-800"> Web Design</h4>
                <span className="text-sm text-gray-700 font-normal">Designing web for Pilketos(Pemilihan Ketua OSIS) 2022/2023  <br />Designing GIGA web for I2C Competition in Atma Jaya University Yogyakarta</span>
              </div>
            </div>
            <div className="mt-12 ml-24 w-full max-w-xs overflow-hidden bg-white rounded-lg ">
              <Image
              src={Mobile}
              alt="Mobile"
              width={200}
              height={200}
              className="object-cover w-full h-64 mt-3" 
              />
              <div className="p-2 ">
                <h4 className=" block text-xl font-semibold text-gray-800">Mobile Design</h4>
                <span className="text-sm text-gray-700">Eatlater, application for reserve chair in restaurant <br /> Ayomasak, application to find inspiration cooking recipes</span>
              </div>
            </div>
            <div className="mt-12 ml-24 w-full max-w-xs overflow-hidden bg-white rounded-lg ">
              <Image
              src={Banner}
              alt="Banner"
              width={200}
              height={200}
              className="object-cover w-full h-64 mt-3" 
              />
              <div className="p-2 ">
                <h4 className=" block text-xl font-semibold text-gray-800"> Banner Design</h4>
                <span className="text-sm text-gray-700">
                  Benerin app X-banner <br />
                  Game Story Of Java X-Banner <br /> 
                  EazyMuse app X-Banner <br />
                  Banner class Serasa
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
   </>
  )
}
