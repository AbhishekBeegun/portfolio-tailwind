import React,{useRef,useEffect}  from 'react';
import {client} from '../lib/client';
import { gsap } from 'gsap';
import Projects from '../components/Projects';
{/*import Projects1 from '../components/Projects1';*/}
import Projects2 from '../components/Projects2';
import Otherprojects from '../components/Otherprojects';
import About from '../components/About';
import Footer from '../components/Footer';
import Projects3 from '../components/Projects3';



const Home = ({bannerData}) => {
  
  
  let tl = gsap.timeline();

  let cursor = useRef(null);

  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  //For Install to Home Screen
  useEffect(()=>{

    let deferredPrompt;
    const addBtn = document.querySelector(".add-button");
    addBtn.style.display = "none";

    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = "block";
    
      addBtn.addEventListener("click", (deferredPrompt) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = "none";
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });
    });
    
  })




  useEffect(() => {
    tl.to({} , 0.016, {
      repeat:-1,
      onRepeat : function(){
        posX += (mouseX-posX) /10;
        posY += (mouseY-posY) /10;
        tl.set(cursor,{
          css:{
            left:posX - 50,
            top:posY - 50,
          }
        })
      }
    })
    document.addEventListener("mousemove" , function(e){
      mouseX = e.pageX;
      mouseY = e.pageY
    })
  })

  return (
    <>
    
        <title>BEEGUN TAILWIND PORTFOLIO</title>
        <meta name="description" content="Beegun portfolio using Tailwind and SANITY GSAP" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="pwa.webmanifest"/>
        <button className="add-button">Add to home screen</button>

    
  
    
    <main className="h-full flex flex-col gap-8 p-5 bg-white">
      <Projects3 Projects3={bannerData.length && bannerData[0]}/>
      <Projects Projects={bannerData.length && bannerData[1]}/>
      <Projects2 Projects2={bannerData.length && bannerData[3]}/>
      {/*<Projects1 Projects1={bannerData.length && bannerData[2]}/>*/}
      
      
    </main>

    <section className="h-full">
    <About/>
    
     {console.log(bannerData[3])}
    </section>

    <section className="p-5 bg-white">
    <Otherprojects/>
      
    </section>
    <Footer/>

    <div ref={el => cursor = el} 
    className="absolute bg-disaster bg-contain bg-center bg-no-repeat mix-blend-difference rounded-full w-[100px] h-[50px] select-none z-50 translate-x-20 translate-y-20 opacity-0 md:opacity-100 lg:opacity-100">
      </div>    
    </>
  )
};

export const getServerSideProps = async () => {

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{bannerData}
  }
}

export default Home ;

{/* getserversideprop next js servi sa pu render client side rendering 
kumSA a sak fois li ggn 1 request li populate li direct*/}