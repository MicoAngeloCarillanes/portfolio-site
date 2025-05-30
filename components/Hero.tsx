import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Facebook, Github, Send } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-[100vh] flex items-center justify-center">
      <div className="flex justify-center relative z-10 my-20 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-0 md:my-0">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Creating Modern, Dynamic Websites using Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[60px] lg:text-5xl"
            words="Transform Your Web Ideas into Reality with Next.js and Tailwind CSS"
          />
          <p className="text-center mt-4">
            Hi, I&apos;m Mico, A student passionate about web development and design.
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 z-16 flex space-x-4 md:space-x-8">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 lg:w-8 lg:h-8 text-black dark:text-white hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 lg:w-8 lg:h-8 text-black dark:text-white hover:text-blue-500 transition" />
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <Send className="w-6 h-6 lg:w-8 lg:h-8 text-black dark:text-white hover:text-blue-500 transition" />
        </a>
      </div>
    </section>
  )
}

export default Hero