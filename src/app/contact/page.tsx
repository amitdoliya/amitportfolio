"use client";
import { Paperclip } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const images = [
  "/image/image.png",
  "/image/image2.png",
  "/image/girl.png",
];

export default function Contact() {
  const [currentImage, setCurrentImage] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(400);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="flex justify-center py-8 min-h-screen px-4 ">
      <div className="flex flex-col md:flex-row w-full max-w-4xl border border-white rounded-2xl shadow-lg overflow-hidden ">
      
<div
  className="relative md:w-1/2 w-full"
  style={{ height: `${formHeight}px` }}
>
  <Image
    src={images[currentImage]}
    alt={`Slide ${currentImage + 1}`}
    fill
    className="object-cover"
  />
</div>




        {/* Right Form Section */}
        <div ref={formRef} className="md:w-1/2 w-full p-6 wrapper">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Let&apos;s Connect

          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-1 text-left">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-black text-left font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1 text-left">
                Subject
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-black text-left font-medium mb-1">
                Attachment
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="fileUpload"
                  required
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                />
                <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                  <Paperclip className="text-gray-900 mr-2" />
                  <span className="text-gray-900">Choose a file...</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-black font-medium mb-1 text-left">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
