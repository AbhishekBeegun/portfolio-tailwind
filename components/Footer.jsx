import React from 'react';

function Footer() {
  function sendEmail() 
{
  window.location = "mailto:abhishekbeegun0642@gmail.com";
}

  return (
    <div className="h-[60vh] bg-black text-white flex flex-col justify-evenly items-center text-center">
      <h2 className="text-2xl">Living, learning, & leveling up <br></br>one day at a time.</h2>
   
        <button
        className="text-violet-400 h-12 w-48 border-2 flex justify-center items-center border-violet-400 rounded-full text-lg hover:bg-violet-500 hover:text-white"
        onClick={sendEmail}>GET IN TOUCH
      
        </button>
      

      <h6 className="text-base">Abhishek Beegun &#169; 2023</h6>
    </div>
  )
}


export default Footer