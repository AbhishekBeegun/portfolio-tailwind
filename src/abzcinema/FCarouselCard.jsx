import React from 'react'

const FCarouselCard = ({imge,title}) => {
  return (
    <div className="h-screen w-full bg-black relative flex flex-row justify-center items-center">
      


      <div className=" z-10 absolute bottom-5 left-5 flex gap-5">
      <button className="px-6 py-4 rounded-lg border">Previous</button>
      <button className="px-6 py-4 rounded-lg border">Next</button>


      </div>
      <div className="z-10 flex flex-col h-full items-center justify-center gap-10">
        <h1 className="z-10 text-[7rem]">{title}</h1>
        <div className="z-10 flex gap-5">
          <p className="border rounded-lg px-4 py-2">Horror</p>

          <p className="border rounded-lg px-4 py-2">1hr 43m</p>
        </div>
        <div className="z-10 flex gap-10">
        <button className="px-8 py-4 rounded-lg border">Play Trailer</button>
        <button className="px-6 py-4 rounded-lg border">Get Tickets</button>
        </div>
      </div>

        <div
        className="absolute w-full h-full opacity-70 bg-black ">

        <iframe className="w-full h-full touch-none" src="https://www.youtube.com/embed/YJXqvnT_rsk?autoplay=1&controls=0&mute=1" title="THE POPE&#39;S EXORCIST – Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
 

      {/* <img
      className="absolute w-full h-full bg-black object-cover opacity-30"
      src={imge} /> */}
     
    </div>
  )
}

export default FCarouselCard