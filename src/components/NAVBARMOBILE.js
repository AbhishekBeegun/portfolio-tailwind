import React from 'react'
import { useState } from "react"
import { Link } from "react-scroll"


const NAVBARMOBILE = () => {
    const [NavOpen, setNavOpen] = useState(false)
  return (
    <div className="navbar-mobile fixed z-10 top-0 left-0 h-[70px] bg-transparent w-full">
        <button 
        className="flex items-center justify-end w-full h-full px-8"
        onClick={() => setNavOpen(!NavOpen)}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="black"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        </button>

        <div className={`top-0 z-50 right-0 flex flex-col justify-around text-5xl items-end border-b border bg-black text-white fixed w-[100vw] h-full py-10 px-8 
       ${NavOpen ? 'translate-x':'translate-x-full'}
       ease-in-out duration-500
       }`}>

<button onClick={() => setNavOpen(!NavOpen)}>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
fill="white"
viewBox="0 0 24 24">
<path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)"></path><path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)"></path>
</svg></button>

      
        
        <Link activeClass="active"
        onClick={() => setNavOpen(false)}
            className="text-white "
            to="HomePage"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>Abhishek</p>
        </Link>

        <Link activeClass="active"
            onClick={() => setNavOpen(false)}
            className="text-white "
            to="Projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>Projects</p>
        </Link>


        <Link activeClass="active"
            onClick={() => setNavOpen(false)}
            className="text-white "
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>About</p>
        </Link>


        <Link activeClass="active"
            onClick={() => setNavOpen(false)}
            className="text-white "
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>Contact</p>
        </Link>
        </div>
    </div>
  )
}

export default NAVBARMOBILE