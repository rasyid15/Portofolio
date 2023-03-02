import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Services</title>
    </Head>
    <Navbar />
      <div className="bg-black min-h-screen">
        <h1 className="text-3xl font-bold text-white text-center pt-24">Coming Soon</h1>     
      </div>
    <Footer />
   </>
  )
}
