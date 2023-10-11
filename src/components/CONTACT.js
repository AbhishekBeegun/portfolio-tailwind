import React from 'react'
import { Link } from "react-scroll"

const CONTACT = () => {
  return (
    <footer className="h-screen w-screen bg-black flex flex-col justify-center items-end lg:flex-row relative">

      <img 
      className="w-full h-full absolute lg:opacity-60 z-10 object-cover"
      src="https://cdn.thecollector.com/wp-content/uploads/2022/03/michelangelo-creation-adam-detail-featured.jpg?width=1400&quality=100"
      alt="Touch here"
      />
      
   
    <div className="bg-black bg-opacity-80 lg:bg-opacity-90 w-full h-full text-5xl relative lg:h-1/2 z-30 lg:py-10 px-4 lg:px-48 text-white flex flex-col justify-center gap-10 lg:gap-0 lg:justify-between">
      <p className="text-lg">Contact</p>
      {/* <h2>You have a new project?</h2> */}
      <h2>Want to say hello ? </h2>

      <a
      href="mailto:abhishekbeegun0642@gmail.com?subject=Get In Touch"
      className="animate-pulse text-red-500 hover:scale-105 transition-all ease-in-out">
      Get In Touch
      </a>

      <a 
      href="mailto:abhishekbeegun0642@gmail.com"
      className="text-sm">Email : abhishekbeegun0642@gmail.com</a>
      <p className="text-xs">AbhishekBeegun©2023</p>

      <Link
           to="HomePage"
           spy={true}
           smooth={true}
           offset={0}
           duration={1000}
    className="uppercase z-30 text-sm absolute bottom-5 right-10 text-white">Back to top
    </Link>

    </div>

    
    </footer>
  )
}

export default CONTACT