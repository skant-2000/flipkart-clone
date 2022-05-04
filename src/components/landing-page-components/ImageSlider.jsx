import React, { useEffect, useState } from 'react'
import styles from "../../styles/ImageSlider.module.css"
import image1 from "../../images/home-page-carousel-images/1.jpg"
import image2 from "../../images/home-page-carousel-images/2.jpg"
import image3 from "../../images/home-page-carousel-images/3.jpg"
import image4 from "../../images/home-page-carousel-images/4.jpg"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ImageSlider() {

  const [images, setImages] = useState([])
  const [pointer, setPointer] = useState(0)

  useEffect(() => {
    setImages([image1, image2, image3, image4])

    let interval = setInterval(() => {
      setPointer(pointer === images.length-1 ? 0 : (prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [pointer])

  const handleForward = () => {
    if ( pointer === 3 ) {
      setPointer(0)
    }
    else {
      setPointer(prev => prev + 1)
    }
  }

  const handleBackword = () => {
    if ( pointer === 0 ) {
      setPointer(images.length-1)
    }
    else {
      setPointer(prev => prev - 1)
    }
  }

  return (
    <div className={styles.imageSlider}>
      <button onClick={handleBackword}><MdKeyboardArrowLeft /></button>
      <div>
        <img src={images[pointer]} alt="" />
      </div>
      <button onClick={handleForward}><MdKeyboardArrowRight /></button>
    </div>
  )
}
