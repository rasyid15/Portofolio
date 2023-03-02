import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Head from "next/head";


export default function Contact() {
  return (
    <>
    <Head>
      <title>Contact</title>
    </Head>
    <Navbar />
      <div className="bg-black min-h-screen flex items-center"> 
        <div className="max-w-4xl px-36 py-6 mx-auto">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Contact Me</h2>
            <form className="w-full">
                <div className="grid grid-cols-1 gap-6 mt-4 w-96">
                    <div className="">
                        <label className=" text-white">Name</label>
                        <input placeholder="Your Name" id="username" type="text" className="text-white w-full px-4 py-2 mt-2 bg-black border border-orange-400 rounded-md focus:outline-none focus:ring" />
                    </div>
                    <div className="">
                        <label className=" text-white">Email</label>
                        <input placeholder="Your Email" id="email" type="text" className="text-white w-full px-4 py-2 mt-2 bg-black border border-orange-400 rounded-md focus:outline-none focus:ring" />
                    </div>
                    <div className="">
                        <label className=" text-white">Message</label>
                        <input placeholder="Your Message" id="message" type="text" className="text-white w-full px-4 py-2 mt-2 bg-black border border-orange-400 rounded-md focus:outline-none focus:ring" />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-base font-semibold text-orange-400 transition-colors duration-300 transform bg-slate-200 rounded-md hover:bg-orange-400 hover:text-white">Send!</button>
                </div>
            </form>
          </div>
        </ div>  
      <Footer />
   </>
  )
}
