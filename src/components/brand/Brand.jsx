import React from 'react'
import './brand.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Carusela1 from "../../assets/Carusela1.png" 
import Carusela2 from "../../assets/Carusela2.png" 
import Carusela3 from "../../assets/Carusela3.png" 
import Carusela4 from "../../assets/Carusela4.png" 
import Carusela5 from "../../assets/Carusela5.png" 
import Carusela6 from "../../assets/Carusela6.png" 
import Carusela7 from "../../assets/Carusela7.png" 


const Brand = () => {
    const [sliderRef] = useKeenSlider({
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 50,
      },
    })
  
    return (
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src={Carusela1}/>
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={Carusela2}/>
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={Carusela3}/>
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={Carusela4}/>
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={Carusela5}/>
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src={Carusela6}/>
        </div>
        <div className="keen-slider__slide number-slide7">
          <img src={Carusela7}/>
        </div>
      </div>
    )
  }
  

export default Brand
