import React from 'react'

const BannerAbz = ({img}) => {
  return (
    <div className="rounded-lg h-[200px] w-[600px] hover:scale-110 transition-all ease-in-out">
      <img src={img} className="w-full h-full object-cover rounded-lg" />
    </div>
  )
}

export default BannerAbz