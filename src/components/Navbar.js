import { Link } from "react-scroll" 
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-pc fixed z-50 top-0 flex flex-col h-screen w-[10vh] font-semibold text-xl justify-evenly items-center bg-black">
        

        <Link activeClass="active"
            className="text-white -rotate-90 hover:rotate-90 transition-all ease-in-out duration-300"
            to="HomePage"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>Abhishek</p>
        </Link>

        <Link activeClass="active"
            className="text-white -rotate-90 hover:rotate-90 transition-all ease-in-out duration-300"
            to="Projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>Projects</p>
        </Link>


        <Link activeClass="active"
            className="text-white -rotate-90 hover:rotate-90 transition-all ease-in-out duration-300"
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>About</p>
        </Link>


        <Link activeClass="active"
            className="text-white -rotate-90 hover:rotate-90 transition-all ease-in-out duration-300"
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}>
          <p>Contact</p>
        </Link>

        
    </div>
  )
}

export default Navbar