import AbzFooter from "@/abzcinema/AbzFooter"
import AbzNavbar from "@/abzcinema/AbzNavbar"
import BannerAbz from "@/abzcinema/BannerAbz"
import FeaturedCarousel from "@/abzcinema/FeaturedCarousel"
import LatestMovies from "@/abzcinema/LatestMovies"
import React from 'react'

const cinema = () => {
  return (
    <div className="text-white w-screen">
    <AbzNavbar/>
    <FeaturedCarousel/>
    <LatestMovies/>

    <div className="flex items-center justify-evenly bg-black">

    <BannerAbz img={"https://cinema.mu/wp-content/uploads/banner_ads/banner-ad-deals-mu-en.jpg"}/>
    <BannerAbz img={"https://cinema.mu/wp-content/uploads/banner_ads/banner-ad-otayo-en.jpg"}/>
    </div>

    <AbzFooter/>
    </div>
  )
}

export default cinema