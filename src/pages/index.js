import React from "react";

import ABOUT from "@/components/ABOUT";
import HOMESCREEN from "@/components/HOMESCREEN";
import Navbar from "@/components/Navbar";
import PROJECTS from "@/components/PROJECTS";
import livewireimg from "../../public/image1.png"
import gal361img from "../../public/image22.png"
import homematchimg from "../../public/image4.png"
import beetvimg from "../../public/image.png"
import relaximg from "../../public/image3.png"
import CONTACT from "@/components/CONTACT";
import NAVBARMOBILE from "@/components/NAVBARMOBILE";
import Head from "next/head";
// import { useState } from "react";
// import { useEffect } from "react";



export default function Home() {

  // const [ColorB, setColorB] = useState(true)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setColorB(!ColorB)
  //   }, 6000);
  
  //   return () => clearInterval(interval);
  // }, [ColorB]);
  return (
       <main 
      //  style={{
      // color : ColorB ? "black"  :"white",
      // transition: 'all 700ms',
      //   }}
       className="gradi">
        <Head>
        <title>Abhishek Beegun</title>
        <meta name="description" content="Abhishek Beegun Portfolio" />
        <link rel="icon" href="/logo.png" />
        </Head>

        <Navbar/>
        <NAVBARMOBILE/>
        <section id="HomePage">
        <HOMESCREEN />
        </section>




        <section id="Projects">        
        <PROJECTS
        number={"01"}
        title={"LiveWire"}
        smalldetail={"Similar to OTAYO, and SPOTIFY"}
        details={"A Web and Android app that enables users to book artists, buy tickets for live events, and design custom posters. Intuitive interface makes booking artists and purchasing tickets easy. It set itself apart with a custom poster feature."}
        imagelink={livewireimg}
        linktop={"https://livewireweb.vercel.app/explore"}  
        githublink={"https://github.com/AbhishekBeegun/livewire-web"} 
        t1={"React JS"}    
        t2={"Next JS"}
        t3={"React Native"}
        t4={"Expo"}
        t5={"Tailwind CSS"} 
        t6={"Hygraph CMS"}
        />
        <PROJECTS
        number={"02"}
        title={"GALAXY / 361"}
        smalldetail={"Inspired by GALAXY and 361"}
        details={"An E-commerce inspired by two major retail brands. The website includes most of the features of the original website such as product listing, CIM monthly payment for individual products, shopping cart functionally and comparison page."}
        imagelink={gal361img}
        linktop={"https://gal361.vercel.app"} 
        githublink={"https://github.com/AbhishekBeegun/ecommerce-nextjs-graphql"}  
        t1={"React JS"}    
        t2={"Next JS"}
        t3={"Redux"}
        t4={"Tailwind CSS"} 
        t5={"Hygraph CMS"}  
        />

<PROJECTS
        number={"03"}
        title={"Relax"}
        smalldetail={"Inspired by Calm and Headspace"}
        details={"An Android app designed to help users reduce stress, promote relaxation, and improve their overall mental well-being.Relax offers a variety of guided meditations, ambient sounds, and other features to help users achieve greater calm and focus in their daily lives."}
        imagelink={relaximg}
        linktop={"https://drive.google.com/uc?export=download&id=1asXJ1x-zppCEQUiLXEVSe43IFtig-PEl"} 
        githublink={"https://github.com/AbhishekBeegun/relax-react-native-expo"}  
        t1={"React Native"}    
        t2={"Expo"}
        t3={"Tailwind CSS"}
        t4={"Sanity CMS"} 
        />

              <PROJECTS
        number={"04"}
        title={"BeeTV IPTV"}
        smalldetail={"Similar to MBC PLAY"}
        details={"A Single Page Application that allows users to watch 200+ live channels from France, USA and UK in HD quality using the UNOFFICIAL SAMSUNG TV+ API."}
        imagelink={beetvimg}
        linktop={"https://beetv.vercel.app/"} 
        githublink={"https://github.com/AbhishekBeegun/IPTV-reactjs-STV-"} 
        t1={"React JS"}  
        t2={"Vite JS"}
        t3={"Tailwind CSS"} 
        t4={"API"} 
         />


        <PROJECTS
        number={"05"}
        title={"HomeMatch"}
        smalldetail={"Similar to ZILLOW and LEXPRESS PROPERTY"}
        details={"A web application that enables users to browse and purchase houses and lands in Mauritius."}
        imagelink={homematchimg}
        linktop={"https://homematch.vercel.app/"}  
        githublink={"https://github.com/AbhishekBeegun/home-match-js"} 
        t1={"React JS"}    
        t2={"Next JS"}
        t3={"Tailwind CSS"} 
        t4={"Hygraph CMS"}  
        
        />
  
        </section>


        <section id="About">
        <ABOUT/>
        </section>

        <section id="Contact">
        <CONTACT/>
        </section>

       </main>
  )
}
