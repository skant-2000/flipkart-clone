import React from 'react'
import HomePageMainCatagory from '../components/landing-page-components/HomePageMainCatagory'
import ImageSlider from "../components/landing-page-components/ImageSlider"
import HomePageTrendingCarousel from "../components/landing-page-components/HomePageTrendingCarousel"
import HomePagePhoneCarousel from "../components/landing-page-components/HomePagePhoneCarousel"

export default function LandingPage() {
  return (
    <div style={{backgroundColor: "rgb(241, 243, 246)"}}>
        <HomePageMainCatagory />
        <ImageSlider />
        <HomePageTrendingCarousel />
        <HomePagePhoneCarousel />
    </div>
  )
}
