import React from 'react';


function About() {
 /* let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cursor = useRef(null);
  let h1 = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
   mo pa kontan effect ki li fer tl2 parfois effect la pa marC TL PU MOUSE EK TL2 PU H1 {<section ref = {el =>  h1 = el } very important } GSAP MOUSE EFFECT EK SKW SKW 
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
    
   tl2.from(h1.children,{
    skewY : 5,
    y:100,
    duration:2,
    delay: .3 ,
    opacity: 0 ,
    stagger:{
      each : .4 ,
      from:"end",
    }
  })

  tl2.from(cursor,{
    duration:1.5,
    delay:1,
    opacity:0
  })
  })
  
     <div ref={el => cursor = el} 
    className="absolute bg-disaster bg-contain bg-center bg-no-repeat mix-blend-difference rounded-full w-[100px] h-[50px] select-none z-50 translate-x-20 translate-y-20 opacity-0 md:opacity-100 lg:opacity-100"></div>    
    snla PU MOUSE FOLLOW EFFECT

    */

  return (

    <div className="flex flex-col h-full overflow-x-hidden">

    <section className="h-[50vh] bg-black text-white flex justify-center items-center p-10 text-center text-2xl">
    I like to code things from scratch and enjoy bringing ideas to life in the browser
    </section>

    <section /*ref = {el =>  h1 = el }*/ className="h-full p-3">
        <section className="h-full text-center w-full flex flex-col items-center rounded-xl border-2 p-10">
            <h1 className="text-3xl p-10 text-violet-400">Languages I understand :</h1>
            <div className="text-xl grid grid-cols-2 lg:grid-cols-4 items-center gap-8 lg:gap-10">
              <svg height="50" viewBox="175.7 78 490.6 436.9" width="50" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>React JS<br></br>
              <svg enableBackground="new 0 0 2500 2165.1" width="50" height="50" viewBox="0 0 2500 2165.1" xmlns="http://www.w3.org/2000/svg"><path d="m1538.7 0-288.7 500-288.7-500h-961.3l1250 2165.1 1250-2165.1z" fill="#4dba87"/><path d="m1538.7 0-288.7 500-288.7-500h-461.3l750 1299 750-1299z" fill="#435466"/></svg>Vue JS<br></br> 
              <svg height="50" viewBox=".5 -.2 1023 1024.1" width="50" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"/><path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"/></svg>Next JS<br></br>
              <svg height="50" preserveAspectRatio="xMidYMid" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stopColor="#2298bd"/><stop offset="1" stopColor="#0ed7b5"/></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"/></svg>Tailwind CSS<br></br>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="74.634 0 362.733 512"><path d="M107.644 470.877L74.634 100.62h362.733l-33.046 370.199L255.778 512z"/><path d="M256 480.522l120.03-33.276 28.24-316.352H256z"/><g fill="#ebebeb"><path d="M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zM256 386.153l-.198.053-50.575-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.209-.058z"/></g><path d="M108.382 0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.076V0h-.002zM205.994 22.896h-20.315V0h63.72v22.896h-20.325v46.148h-23.078l-.002-46.148zM259.511 0h24.062l14.802 24.26L313.163 0h24.072v69.044h-22.982V34.822l-15.877 24.549h-.396l-15.889-24.549v34.222h-22.579V0zM348.72 0h23.084v46.222h32.453v22.822H348.72V0z"/><g fill="#fff"><path d="M255.844 268.217v45.41h55.917l-5.271 58.894-50.646 13.67v47.244l93.093-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zM255.844 176.305V221.716h109.687l.911-10.207 2.069-23.021 1.086-12.183z"/></g></svg>HTML<br></br>
              <svg fill="none" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>CSS<br></br>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z" fill="#007acc"/></svg>TypeScript<br></br>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>Javascript<br></br>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 384"><path fill="#CF649A" d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z"/></svg>Sass<br></br>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="5.591 3.262 474.801 137.803"><path d="M184.614 61.929c0-14.562-4.152-22.038-12.457-22.447-3.305-.156-6.53.37-9.669 1.589-2.505.896-4.191 1.784-5.078 2.681V78.51c5.312 3.334 10.029 4.884 14.143 4.64 8.703-.577 13.061-7.643 13.061-21.221zm10.244.604c0 7.398-1.735 13.539-5.225 18.422-3.889 5.527-9.279 8.373-16.17 8.529-5.195.165-10.547-1.462-16.054-4.874v31.591l-8.909-3.178v-70.12c1.462-1.793 3.344-3.333 5.624-4.64 5.303-3.09 11.745-4.678 19.329-4.756l.126.126c6.931-.087 12.271 2.759 16.024 8.529 3.5 5.293 5.255 12.077 5.255 20.371zM249.305 83.266c0 9.923-.994 16.794-2.982 20.615-1.998 3.82-5.8 6.871-11.414 9.143-4.552 1.793-9.475 2.768-14.757 2.934l-1.473-5.614c5.371-.73 9.153-1.462 11.346-2.193 4.318-1.462 7.281-3.703 8.909-6.706 1.306-2.446 1.949-7.115 1.949-14.025V85.1c-6.092 2.769-12.476 4.143-19.152 4.143-4.387 0-8.256-1.374-11.59-4.143-3.743-3.012-5.614-6.832-5.614-11.462v-37.08l8.909-3.051v37.321c0 3.986 1.286 7.057 3.859 9.211s5.907 3.188 9.991 3.109c4.084-.088 8.46-1.667 13.109-4.757v-43.54h8.909v48.415zM284.082 88.997a35.51 35.51 0 0 1-2.934.126c-5.039 0-8.968-1.198-11.774-3.606-2.798-2.407-4.201-5.73-4.201-9.971v-35.09h-6.102v-5.604h6.102V19.968l8.899-3.168v18.052h10.01v5.604h-10.01v34.846c0 3.344.896 5.712 2.689 7.097 1.54 1.14 3.987 1.793 7.32 1.959v4.639zM338.023 88.266h-8.909V53.878c0-3.499-.818-6.511-2.446-9.025-1.881-2.847-4.493-4.27-7.847-4.27-4.084 0-9.191 2.154-15.322 6.462v41.221h-8.908V6.069l8.908-2.807V40.7c5.692-4.143 11.911-6.219 18.666-6.219 4.718 0 8.538 1.589 11.463 4.757 2.934 3.167 4.396 7.115 4.396 11.833v37.195h-.001zM385.374 60.526c0-5.595-1.062-10.215-3.178-13.87-2.515-4.454-6.423-6.804-11.706-7.047-9.767.565-14.641 7.563-14.641 20.976 0 6.15 1.014 11.287 3.061 15.41 2.612 5.254 6.531 7.847 11.756 7.759 9.805-.079 14.708-7.818 14.708-23.228zm9.757.058c0 7.964-2.037 14.592-6.102 19.884-4.475 5.927-10.653 8.899-18.539 8.899-7.817 0-13.909-2.973-18.305-8.899-3.987-5.292-5.976-11.92-5.976-19.884 0-7.485 2.154-13.782 6.463-18.909 4.552-5.439 10.536-8.168 17.935-8.168 7.397 0 13.421 2.729 18.061 8.168 4.309 5.127 6.463 11.424 6.463 18.909zM446.205 88.266h-8.909V51.929c0-3.986-1.198-7.096-3.596-9.338-2.398-2.232-5.596-3.314-9.582-3.227-4.229.078-8.256 1.462-12.076 4.143v44.759h-8.909v-45.86c5.127-3.732 9.845-6.17 14.153-7.31 4.064-1.062 7.651-1.589 10.741-1.589 2.114 0 4.104.204 5.975.614 3.499.809 6.346 2.31 8.538 4.513 2.447 2.437 3.665 5.36 3.665 8.782v40.85z" fill="#646464"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2031.312" y1="275.868" x2="-1922.296" y2="182.075" gradientTransform="matrix(.5625 0 0 -.568 1145.56 166.282)"><stop offset="0" stopColor="#5a9fd4"/><stop offset="1" stopColor="#306998"/></linearGradient><path d="M60.51 6.398c-4.584.021-8.961.412-12.812 1.094-11.346 2.005-13.406 6.2-13.406 13.938v10.219h26.812v3.406H24.229c-7.792 0-14.616 4.684-16.75 13.594-2.462 10.213-2.571 16.586 0 27.25 1.906 7.938 6.458 13.594 14.25 13.594h9.219v-12.25c0-8.85 7.657-16.656 16.75-16.656h26.781c7.455 0 13.406-6.138 13.406-13.625V21.429c0-7.266-6.13-12.725-13.406-13.938-4.607-.766-9.385-1.115-13.969-1.093zm-14.5 8.218c2.77 0 5.031 2.299 5.031 5.125 0 2.816-2.262 5.094-5.031 5.094-2.779 0-5.031-2.277-5.031-5.094 0-2.826 2.252-5.125 5.031-5.125z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-1880.151" y1="125.305" x2="-1919.08" y2="180.384" gradientTransform="matrix(.5625 0 0 -.568 1145.56 166.282)"><stop offset="0" stopColor="#ffd43b"/><stop offset="1" stopColor="#ffe873"/></linearGradient><path d="M91.229 35.054V46.96c0 9.231-7.826 17-16.75 17H47.698c-7.336 0-13.406 6.278-13.406 13.625v25.531c0 7.267 6.318 11.541 13.406 13.625 8.487 2.496 16.626 2.947 26.781 0 6.75-1.954 13.406-5.888 13.406-13.625V92.898H61.104v-3.406h40.187c7.793 0 10.696-5.436 13.406-13.594 2.8-8.398 2.681-16.476 0-27.25-1.926-7.757-5.604-13.594-13.406-13.594H91.229zM76.166 99.71c2.779 0 5.031 2.277 5.031 5.094 0 2.826-2.252 5.125-5.031 5.125-2.77 0-5.031-2.299-5.031-5.125 0-2.816 2.262-5.094 5.031-5.094z" fill="url(#b)"/><path d="M463.554 26.909h1.562v-9.796h3.699v-1.168h-8.962v1.168h3.7v9.796m6.648 0h1.334v-8.947l2.896 8.946h1.485l3.019-8.916v8.917h1.456V15.946h-1.926l-3.299 9.393-2.812-9.393h-2.153v10.963" fill="#646464"/><radialGradient id="c" cx="-3393.238" cy="376.791" r="29.037" gradientTransform="matrix(0 -.2399 -1.0547 0 458.797 -680.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b8b8b8" stopOpacity=".498"/><stop offset="1" stopColor="#7f7f7f" stopOpacity="0"/></radialGradient><path d="M97.339 134.098c0 3.848-16.087 6.967-35.932 6.967-19.844 0-35.931-3.119-35.931-6.967s16.087-6.968 35.931-6.968c19.845 0 35.932 3.12 35.932 6.968z" opacity=".444" fill="url(#c)"/></svg>Python<br></br>
              <svg width="50" height="50" viewBox="0 0 256 134" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fillRule="evenodd"><ellipse fill="#8993BE" cx="128" cy="66.63" rx="128" ry="66.63"/><path d="M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z" fill="#232531"/></g></svg>PHP 
              <svg height="50" viewBox=".29 .22 77.26 95.75" width="50" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z" fill="#02539a"/><g fill="#45d1fd"><path d="m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z" fillOpacity=".85"/><path d="m.29 47.85 14.58 14.57 62.2-62.2h-29.02z"/></g></g></svg>Flutter<br></br>
              
            </div>

            <h1 className="text-3xl p-10 text-violet-400">Tools I use :</h1>
            <div className="text-xl grid grid-cols-2 lg:grid-cols-4 items-center gap-8 lg:gap-10">
            <svg height="50" viewBox="1.2 .4 352.2 70.9" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m264 25.5v44.7h-14.4v-51.7z" fill="#f37368"/><path d="m60.2 61.9 10.8 9.4 45.5-23.7-4.7-11.3zm189.4-28.8 36.6-19-6.2-10.7-30.4 15.1z" fill="#f7a199"/><path d="m146.6 22v48.2h-13.8v-68.7zm-86.4 39.9 10.8 9.4 20.8-52-6.7-17.8z" fill="#f37368"/><path d="m85.1 1.5h14.2l26.3 68.7h-14.6zm63.6 0 30.3 46.9v21.8l-46.2-68.7zm56.3 0h14.3v68.7h-14.3zm44.6 12.6h-22v-12.6h51.3l7.3 12.6h-22.2z" fill="#f04939"/><path d="m328.5 44.1v26.1h-14.2v-26.1" fill="#f7a199"/><path d="m338.3 1.5-24 42.6h14.2l24.9-42.6z" fill="#f04939"/><path d="m314.3 44.1-24.8-42.6h15.6l16.7 29.2z" fill="#f37368"/><path d="m6.9 9.5c0 9.5 5.9 15.2 17.7 18.2l12.5 2.9c11.2 2.6 18 9 18 19.4.1 4.5-1.4 8.9-4.1 12.5 0-10.4-5.4-16-18.3-19.4l-12.3-2.8c-9.9-2.2-17.5-7.5-17.5-18.8 0-4.3 1.4-8.6 4-12" fill="#f04939"/><g fill="#f37368"><path d="m179 44.9v-43.4h13.8v68.7h-13.8z"/><path d="m43.3 47.4c5.3 3.4 7.7 8.2 7.7 15.1-4.5 5.7-12.2 8.8-21.3 8.8-15.3 0-26.2-7.6-28.5-20.7h14.7c1.9 6 6.9 8.8 13.7 8.8 8.1.1 13.6-4.3 13.7-12m-28.7-23.8c-5-3-7.9-8.4-7.7-14.2 4.3-5.6 11.7-9 20.7-9 15.7 0 24.7 8.3 27 19.9h-14.2c-1.6-4.6-5.5-8.2-12.6-8.2-7.7.1-12.9 4.5-13.2 11.5"/></g></svg>Sanity<br></br>
            <svg width="50" height="50" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"/>
<path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2"/>
<path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
<defs>
<linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
<stop stopColor="#249361"/>
<stop offset="1" stopColor="#3ECF8E"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stopOpacity="0"/>
</linearGradient>
</defs>
            </svg>Supabase<br></br>
            <svg width="50" height="50" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36"/></svg>Git<br></br>            <svg height="50" viewBox="0 0 200 300" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" fill="#ff7262"/><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/></svg> Figma<br></br>
            <svg height="50" viewBox="18.797 267.7451701 551.469 144.4458299" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m112.871 349.254c.328-5.895 3.219-11.094 7.574-14.781 4.278-3.621 10.032-5.828 16.309-5.832 6.277.004 12.031 2.211 16.309 5.832 4.355 3.687 7.246 8.886 7.578 14.781.332 6.062-2.102 11.699-6.379 15.871-4.356 4.246-10.563 6.914-17.504 6.914-6.945 0-13.156-2.668-17.516-6.914-4.273-4.172-6.707-9.809-6.371-15.871z" fill="#005385"/><path d="m74.828 361.191c.04 2.301.781 6.786 1.883 10.297 2.32 7.414 6.258 14.278 11.742 20.328 5.625 6.211 12.543 11.207 20.543 14.746 8.41 3.727 17.524 5.629 26.973 5.61 9.453-.016 18.562-1.949 26.972-5.699 7.993-3.578 14.911-8.586 20.532-14.813 5.476-6.074 9.406-12.949 11.73-20.367a51.442 51.442 0 0 0 2.207-11.367 51.794 51.794 0 0 0 -.363-11.289c-1.043-7.332-3.582-14.215-7.484-20.489-3.583-5.761-8.184-10.808-13.661-15.058l.008-.008-55.262-42.437a7.93 7.93 0 0 0 -.14-.118c-3.637-2.777-9.731-2.769-13.715.02-4.039 2.824-4.492 7.484-.91 10.433l-.012.008 23.051 18.75-70.266.074h-.097c-5.805.004-11.383 3.821-12.493 8.633-1.129 4.907 2.817 8.973 8.852 8.996l-.008.024 35.613-.07-63.554 48.777c-.078.062-.164.121-.242.183-5.989 4.59-7.93 12.227-4.157 17.059 3.836 4.914 11.98 4.918 18.04.02l34.683-28.379s-.504 3.832-.465 6.136zm89.121 12.825c-7.144 7.289-17.144 11.414-27.976 11.433-10.836.02-20.84-4.074-27.989-11.344-3.492-3.546-6.058-7.613-7.644-11.96a31.105 31.105 0 0 1 -1.754-13.356 31.591 31.591 0 0 1 3.832-12.582c2.09-3.789 4.961-7.211 8.504-10.109 6.945-5.664 15.785-8.727 25.043-8.739 9.258-.011 18.094 3.028 25.043 8.668 3.539 2.883 6.41 6.293 8.496 10.075a31.594 31.594 0 0 1 3.84 12.57 31.133 31.133 0 0 1 -1.758 13.359c-1.582 4.352-4.145 8.426-7.637 11.985z" fill="#ff7021"/><path d="m491.52 349.168c.539-5.957 5.144-9.734 12.171-9.734 7.036 0 11.637 3.777 12.18 9.734zm23.628 14.695c-1.804 4.418-6.043 7.032-11.812 7.032-7.219 0-12.082-4.508-12.262-11.629h41.481v-2.094c0-17.832-10.461-27.856-29.219-27.856-18.215 0-29.219 10.118-29.219 25.985 0 15.957 11.18 26.054 29.219 26.054 10.816 0 19.219-3.703 24.402-10.234zm-207.738-14.668c.551-5.957 5.145-9.73 12.18-9.73 7.027 0 11.633 3.773 12.172 9.73zm23.629 14.7c-1.801 4.417-6.043 7.031-11.812 7.031-7.215 0-12.086-4.512-12.266-11.633h41.48v-2.09c0-17.832-10.464-27.859-29.214-27.859-18.223 0-29.215 10.121-29.215 25.984 0 15.961 11.172 26.059 29.215 26.059 10.816 0 19.218-3.703 24.402-10.235zm-59.715-45.356h14.969v61.215h-14.969zm80.836 16.258h15.047v3.648c5.34-5.683 11.727-8.554 18.938-8.554 8.316 0 14.609 2.871 17.859 7.761 2.707 4.043 2.887 8.918 2.887 15.332v26.77h-15.071v-23.527c0-9.75-1.961-14.262-10.527-14.262-8.664 0-14.086 5.156-14.086 13.812v23.977h-15.047zm103.184 21.254c0 8.383-5.598 13.879-14.25 13.879-8.664 0-14.258-5.313-14.258-13.782 0-8.589 5.508-13.902 14.258-13.902 8.652 0 14.25 5.399 14.25 13.805zm0-19.211c-3.793-4.078-9.297-6.317-16.957-6.317-16.492 0-27.778 10.188-27.778 25.442 0 14.953 11.192 25.414 27.504 25.414 7.489 0 12.989-1.887 17.231-6.133v4.508h15.058v-65.102l-15.058 3.887zm-218.215 5.406c8.746 0 14.246 5.313 14.246 13.902 0 8.469-5.59 13.782-14.246 13.782s-14.25-5.496-14.25-13.879c0-8.406 5.594-13.805 14.25-13.805zm-14.25-23.707-15.063-3.887v65.102h15.063v-4.508c4.238 4.246 9.738 6.133 17.223 6.133 16.32 0 27.503-10.461 27.503-25.414 0-15.254-11.269-25.442-27.773-25.442-7.668 0-13.164 2.239-16.953 6.317zm313.394 61.215v-44.957h15.059v2.777c4.508-5.426 9.281-8.129 14.695-8.129 1.086 0 2.434.176 4.239.356v12.812c-1.442-.187-3.063-.187-4.778-.187-8.75 0-14.156 5.773-14.156 15.597v21.731z" fill="#005385"/></svg>Blender<br></br>
            <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#001e36"/><g fill="#31a8ff"><path d="M54 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2s5.6-.1 8.7-.2 6.1-.1 9.1-.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1V164c.1.7-.4 1.3-1.1 1.4H55.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.7V113c1.4.1 2.7.2 3.9.2H85c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1zM192 106.9c-3-1.6-6.2-2.7-9.6-3.4-3.7-.8-7.4-1.3-11.2-1.3-2-.1-4.1.2-6 .7-1.3.3-2.4 1-3.1 2-.5.8-.8 1.8-.8 2.7s.4 1.8 1 2.6c.9 1.1 2.1 2 3.4 2.7 2.3 1.2 4.7 2.3 7.1 3.3 5.4 1.8 10.6 4.3 15.4 7.3 3.3 2.1 6 4.9 7.9 8.3 1.6 3.2 2.4 6.7 2.3 10.3.1 4.7-1.3 9.4-3.9 13.3-2.8 4-6.7 7.1-11.2 8.9-4.9 2.1-10.9 3.2-18.1 3.2-4.6 0-9.1-.4-13.6-1.3-3.5-.6-7-1.7-10.2-3.2-.7-.4-1.2-1.1-1.1-1.9v-17.4c0-.3.1-.7.4-.9s.6-.1.9.1c3.9 2.3 8 3.9 12.4 4.9 3.8 1 7.8 1.5 11.8 1.5 3.8 0 6.5-.5 8.3-1.4 1.6-.7 2.7-2.4 2.7-4.2 0-1.4-.8-2.7-2.4-4s-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2-3.1-2.2-5.7-5.1-7.6-8.5-1.6-3.2-2.4-6.7-2.3-10.2 0-4.3 1.2-8.4 3.4-12.1 2.5-4 6.2-7.2 10.5-9.2 4.7-2.4 10.6-3.5 17.7-3.5 4.1 0 8.3.3 12.4.9 3 .4 5.9 1.2 8.6 2.3.4.1.8.5 1 .9.1.4.2.8.2 1.2v16.3c0 .4-.2.8-.5 1-.9.2-1.4.2-1.8 0z"/></g></svg>Ae Express<br></br>
            <svg viewBox="0 0 174.38 174.38" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="87.19" cy="87.19" fill="#23bec7" r="87.19"/><path d="M89.22 88.66c2.55-2.24 4.62-4.35 7.35-5.5 1.6-.67 3.37-1.62 4.89-.15s.56 3.08.1 4.66c-.92 3.17-1.85 6.35-2.69 9.54-.25.93-.67 2 .28 2.83s2.14.28 3.08-.2c3.48-1.78 6.31-3.89 5.87-8.57-.26-2.8 0-5.78 2.59-7.78 1-.79 2.21-1.71 3.48-.83s.36 2 0 3a25.79 25.79 0 0 0-1 11.7c.13.88 0 2.15.81 2.47 1.11.42 1.61-1 2.32-1.58s1.19-1.4 1.81-2.08c1.64-1.79 2.54-3.22.36-5.67-2.53-2.83-1.77-8.37.72-11a5.11 5.11 0 0 1 5.77-1.5c2.17.79 2.88 2.66 2.94 4.85.06 2.46-1 4.62-1.83 7 2.42.61 3.92-.75 5.28-2.22 3.28-3.56 7.08-5.82 12.12-5.29 3.65.38 5.74 2.35 5.55 5.22a4 4 0 0 1-5.72 3.15c-1.14-.61-1-1.17 0-1.75a1.68 1.68 0 0 0 .93-2.06 2.5 2.5 0 0 0-2.23-1.71 5.62 5.62 0 0 0-3.94.88c-3.66 2.34-5.71 8.84-4 12.8 1 2.38 2.86 2.83 4.79 1.14a9.16 9.16 0 0 0 2.34-3.68 10 10 0 0 1 1.19-2.46c.91-1.21 2.17-2.28 3.75-1.63s.77 2.29.51 3.4c-.93 3.85-1.72 7.6 1.54 10.84a.84.84 0 0 1 0 1.24 1.3 1.3 0 0 1-1.52.22 9.11 9.11 0 0 1-5.2-4.66c-.33-.72-.47-1.77-1.64-.74a6 6 0 0 1-7.84.65c-2.84-1.82-3.86-4.55-3.6-7.82.05-.64.13-1.26.21-2-3.27.27-5.93 1-7.8 4a18 18 0 0 1-6.43 5.94c-3.41 2-4.74 1.38-5.66-2.37-.13-.52-.24-1-.44-2a26.24 26.24 0 0 1-7.5 4.71c-5.17 1.84-8.17-.53-7.41-6a39.08 39.08 0 0 1 2.31-8.2c.24-.65.82-1.45 0-2-.6-.38-1.23.26-1.7.66-3.19 2.71-6 5.71-6.92 10a16.27 16.27 0 0 1-1.08 3.68 3.79 3.79 0 0 1-4 2.4c-1.8-.32-.64-2.16-1.14-3.29-1.92 1-3.76 2-5.66 2.87-1.37.63-3.16 1.13-4.16-.05-1.67-2-2.8-1.31-4.56-.19-2.57 1.64-5.52.94-7.85-1.77-1.18-1.37-1.79-1.28-2.93-.06a26 26 0 0 1-8.08 5.65C35.69 113 24 106.66 23.34 93.56 22.56 78.77 28.85 67 41.21 58.79a13.15 13.15 0 0 1 11.09-1.85A9.82 9.82 0 0 1 59.62 67a10.25 10.25 0 0 1-7.79 9.27c-.71.16-1.63.44-2-.23-.56-.9.33-1.51.94-2 3.34-2.82 3.91-6.49 3.28-10.52-.6-3.76-3.28-5.28-6.85-3.91a16.85 16.85 0 0 0-6.58 4.89A41.75 41.75 0 0 0 30.07 88 18.87 18.87 0 0 0 32 99c2.54 4.85 6.85 7 12.17 5.74a25 25 0 0 0 11.21-6.18 4.77 4.77 0 0 0 1.32-3.46c.73-7.6 7.3-13.3 14.64-12.74a7.12 7.12 0 0 1 4.73 2 4 4 0 0 1 .93 4.53c-.71 1.72-2.29 2.28-4.08 2.19a2.28 2.28 0 0 1-2-.81c-.66-1 .6-1.07 1-1.57 1.12-1.4.49-3.07-1.43-3.46a5.49 5.49 0 0 0-5.28 1.68 12.27 12.27 0 0 0-3.36 10.63c.2 1.48.83 2.93 2.46 3.37S67 100.14 68 99a8.63 8.63 0 0 0 1.57-3.2 5.08 5.08 0 0 1 1.69-2.8c1-.77 2.1-1.4 3.28-.71s.46 1.85.46 2.81c0 1.76-1.9 3.81.45 5.16 1.26.72 6.34-3.11 6.74-4.91.63-2.87 1.14-5.77 1.71-8.65a4.9 4.9 0 0 1 1.1-2.77 3.62 3.62 0 0 1 4-1c1.51.63.76 2 .61 3.16-.08.69-.2 1.39-.39 2.57zM123 82c-.26-.7-.68-1.38-1.54-1.29s-1.11.88-1.18 1.62a7 7 0 0 0 2.29 5.91A8.37 8.37 0 0 0 123 82z" fill="#fff"/></svg>Canva<br></br>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 130.746 595.279 580.398"><radialGradient id="a" cx="-183.69" cy="328.972" r=".76" gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#442f55" stopOpacity=".98"/><stop offset="1" stopColor="#12002c"/></radialGradient><path d="M24.803 155.549h545.674v530.792H24.803V155.549z" fill="url(#a)"/><path d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm421.16-300.617c12.649 0 17.114 0 18.354-.496 0-1.736.496-2.977.496-4.217 0-13.394-6.449-38.197-32.244-38.197-23.812 0-33.98 20.834-36.461 42.91h49.855zm-50.35 33.98c.496 33.485 16.37 56.056 54.071 56.056 14.634 0 27.283-1.983 40.43-7.688 1.736-.744 2.977-.496 2.977 1.736v31.004c0 2.48-.744 3.721-2.48 4.961-13.146 6.448-29.517 9.425-49.855 9.425-65.48 0-90.036-48.366-90.036-102.189 0-58.536 30.261-106.406 83.588-106.406 54.071 0 72.922 45.39 72.922 82.347 0 11.906-.744 21.579-1.984 26.292-.496 1.984-1.24 2.729-3.225 3.225-4.961.744-19.595 1.735-41.422 1.735H370.81v-.498zm-132.945-25.299c-6.945-27.532-23.812-87.556-30.013-116.576h-.496c-5.208 29.02-18.851 78.13-29.02 116.576h59.529zm-69.699 40.182l-19.594 74.162c-.496 1.983-1.24 2.728-3.721 2.728H108.39c-2.48 0-2.977-.744-2.48-3.72l70.441-246.298c1.24-4.464 1.984-7.937 2.48-20.338 0-1.736.744-2.48 1.984-2.48h52.087c1.736 0 2.48.496 2.977 2.48l78.874 267.132c.496 1.983 0 3.224-1.984 3.224h-40.925c-1.984 0-3.225-.744-3.721-2.479l-20.339-74.41h-79.618z" fill="#d8a1ff"/></svg>Ae After Effect<br></br> 
       </div>
          

      </section>       
    </section>

    <section className="relative flex overflow-x-hidden cursor-progress">
     
    <div className="py-12 animate-marquee whitespace-nowrap">
      <span className="text-4xl mx-4 text-violet-400">Currently trying to understand :</span>
      <span className="text-4xl mx-4">Laravel</span>
      <span className="text-4xl mx-4">MySQL</span>
      <span className="text-4xl mx-4">Webflow</span>
      <span className="text-4xl mx-4">WordPress</span>
      <span className="text-4xl mx-4">JQuery</span>
      <span className="text-4xl mx-4">Bootstrap</span>
      <span className="text-4xl mx-4">Bulma</span>
      <span className="text-4xl mx-4">GSAP</span>
      <span className="text-4xl mx-4">FramerMotion</span>
     </div>

     <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
     <span className="text-4xl mx-4 text-violet-500">Currently trying to understand :</span>
     <span className="text-4xl mx-4">Laravel</span>
      <span className="text-4xl mx-4">MySQL</span>
      <span className="text-4xl mx-4">Webflow</span>
      <span className="text-4xl mx-4">WordPress</span>
      <span className="text-4xl mx-4">JQuery</span>
      <span className="text-4xl mx-4">Bootstrap</span>
      <span className="text-4xl mx-4">Bulma</span>
      <span className="text-4xl mx-4">GSAP</span>
      <span className="text-4xl mx-4">FramerMotion</span>
  </div>
    </section> 

    </div>
  )
}

export default About