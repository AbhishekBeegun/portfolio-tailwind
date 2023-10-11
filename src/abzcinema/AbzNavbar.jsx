import React from 'react'
import Image from "next/image"
import LOGOCINEMA from "../../public/logo-cinema.png"
import Link from "next/link"

const AbzNavbar = () => {

  const navitem = ["Movies","Theaters","Articles","Cinemas offers","Contact Us"]
  return (
    <div className="z-20 fixed top-0 left-0 bg-opacity-50 bg-blur w-full flex flex-row justify-evenly items-center h-20">
      <Image
      src={LOGOCINEMA}
      className="w-20 h-20 object-contain" width={80} height={80} />
      {navitem.map( item => (
        <div key={item}>
        <p className="">{item}</p>
        </div>
      ))}
    
    </div>
  )
}

export default AbzNavbar