import React from 'react'
import Link from "next/link"
import Image from "next/image"

const PROJECTS = ({number,title,smalldetail,details
,t1,t2,t3,t4,t5,t6,linktop,imagelink,githublink}) => {
  return (
    <div className="h-auto w-screen flex justify-evenly">
      <div className=" w-full h-[100vh] flex flex-col justify-between px-2 lg:px-36  ">
       <div className="flex flex-col lg:flex-row h-full">
        <h2 className="text-2xl lg:text-5xl px-1 font-semibold">{number}</h2>
        
   

        <div className="flex flex-col w-full h-full text-xl items-center justify-between py-16 lg:py-24 px-8">
          <h1 className=" text-4xl lg:text-5xl font-semibold">{title}</h1>
          <h2 className="text-center">{smalldetail}</h2>
          <Image 
          className="lg:hidden scale-125"
          src={imagelink} alt="IMG DEMO" />
          <p className="hidden lg:block">{details}</p>

          <div className="flex list-none flex-wrap gap-5 justify-between text-center font-semibold py-4">
            <li>{t1}</li>
            <li>{t2}</li>
            <li>{t3}</li>
            <li>{t4}</li>
            <li>{t5}</li>
            <li>{t6}</li>

          </div>

        <div className="flex w-full items-center justify-center gap-10 lg:gap-20 lg:text-2xl">
       
          <Link href={`${linktop}`} target="_blank"
    className=" rounded-sm underline underline-offset-4 hover:no-underline  h-[50px] flex justify-center items-center hover:scale-110 transition-all ease-in-out"
    >
      LIVE DEMO
    </Link>

    <Link href={`${githublink}`} target="_blank"
    className="rounded-sm underline underline-offset-4 hover:no-underline h-[50px] flex justify-center items-center hover:scale-110 transition-all ease-in-out"
    >
      GITHUB
    </Link>
    </div>


        </div>

       </div>
        
      </div>

      <a
      target="_blank"
      href={linktop}
      className="hidden w-full h-[100vh] lg:flex flex-col items-center justify-center bg-black ">

        <Image
        className="hover:scale-105 transition-all ease-in-out"
        src={imagelink} alt="IMG DEMO" />

      </a>
    </div>
  )
}

export default PROJECTS