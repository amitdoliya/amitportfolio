"use client"
import Image from "next/image";



export default function Header() {


  return (
    <div className="pt-4  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
 
<div className="flex items-center justify-center pt-8">

   
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}

          <div className="max-w-lg">
              <div className="px-3 md:px-8 my-8">
  <h2 className="text-2xl font-medium text-left text-gray-900">
    <span className="wave px-1">👋🏾</span>Welcome to my website!
  </h2>
</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I&apos;m <span className="text-blue-700">Amit Doliya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">  
  <div className="text"></div>
</h2>
            <p className="text-gray-700 mb-8">
              I specialize in creating high-quality websites and applications that are fast, responsive, and beautiful.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="btn"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="btn"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-12 md:mt-0">
            <div className="relative w-6 h-64 md:w-96 md:h-96">
<Image
  src="/image/amit.jpeg" // Note the leading slash for public folder
  alt="Profile Image"
  width={200} // Adjust as needed
  height={200} // Adjust as needed
  className="rounded-full w-full h-full object-cover shadow-lg"
/>

              <div className="absolute inset-0 rounded-full bg-purple-100 blur-2xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
