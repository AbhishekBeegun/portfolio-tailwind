import React from 'react';

import { urlFor } from '../lib/client';

const Projects2 = ({Projects2}) => {

  return (
    
     

        <section className="relative bg-black h-96 w-full rounded-md border">
        <div className="h-full w-full">
          <img className="object-cover h-full w-full opacity-40" 
          src={urlFor(Projects2.image)} alt="" />

          <div className=" absolute top-0 h-full w-full p-8 flex flex-col justify-evenly">
            <h1 className=" text-white text-2xl">{Projects2.project}
            </h1>


            <h3 className="text-white text-sm">{Projects2.desc}
            </h3>


            <h4 className="text-xl text-white">{Projects2.tech}
            </h4>

            <div className="klick h-10 bg-black rounded-3xl flex flex-row justify-evenly items-center">


              <a href="https://applehomeclone.vercel.app" target={"_blank"} rel="noreferrer"
              className="hover:invert cursor-pointer text-lg font-semibold text-blue-400">Version 1
              </a>
              
              <a href="https://appletailwind.vercel.app" target={"_blank"} rel="noreferrer"
              className="hover:invert cursor-pointer text-lg font-semibold text-red-400">Version 2
                </a>
            </div>

          </div>
        </div>
        </section>
   

   
  )
}

export default Projects2