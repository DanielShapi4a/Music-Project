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
const animation = { duration: 35000, easing: (t) => t }
const Brand = () => {
    const [sliderRef] = useKeenSlider({
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 50, 
      }
      ,renderMode: "performance",
      drag: false,
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
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

      <div className='Central-sponsor'>
        <svg width="259" height="48" viewBox="0 0 259 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="univisionLogo"><title id="univisionLogo">Univision Logo</title><path fill-rule="evenodd" clip-rule="evenodd" d="M79.936 1.21872V40.1721C79.936 46.1505 75.2606 47.8877 71.0328 47.8877C66.8697 47.8877 62.1929 46.1505 62.1929 40.1721V1.21872H68.9822V39.596C68.9822 41.9093 69.6873 42.4234 71.0961 42.4234C72.4416 42.4234 73.1452 41.9093 73.1452 39.596V1.21872H79.936ZM97.9573 1.21872L99.8799 14.3957C101.428 22.9645 102.497 31.6135 103.082 40.3021H103.338V37.8587C103.401 33.4241 103.146 28.9229 103.146 24.4882V1.21872H108.72V46.9866H98.6625L95.4592 24.1027C94.3698 18.4448 93.9856 13.3026 93.4086 7.90324H93.1524C93.1524 9.89604 93.279 11.8888 93.3438 13.8166V46.9866H87.7705V1.21872H97.9573ZM116.693 46.9866V1.21872H123.483V46.9866H116.693ZM136.859 1.21872L138.973 20.3106C139.485 24.8088 139.996 33.7446 140.511 38.3093H140.638C141.023 32.7815 141.534 27.3171 141.983 21.8543L144.034 1.2202H150.825L145.443 46.9881H135.195L130.068 1.21872H136.859ZM157.936 46.9866V1.21872H164.724V46.9866H157.936ZM179.203 39.596C179.203 41.9093 179.91 42.4234 181.32 42.4234C182.666 42.4234 183.371 41.9093 183.371 39.596V34.7743C183.371 28.3453 172.417 22.0463 172.417 14.5892V8.03323C172.417 2.05484 177.093 0.319078 181.256 0.319078C185.485 0.319078 190.16 2.05336 190.16 8.03323V17.6752H183.372V8.61083C183.372 6.296 182.667 5.78191 181.322 5.78191C179.913 5.78191 179.205 6.296 179.205 8.61083V14.2672C179.205 17.5452 190.159 27.4442 190.159 32.0724V40.1706C190.159 46.149 185.483 47.8862 181.254 47.8862C177.091 47.8862 172.416 46.149 172.416 40.1706V29.6276H179.203V39.596ZM197.821 46.9866V1.21872H204.612V46.9866H197.821ZM218.979 39.596C218.979 41.9093 219.684 42.4234 221.096 42.4234C222.442 42.4234 223.147 41.9093 223.147 39.596V8.61083C223.147 6.296 222.442 5.78191 221.096 5.78191C219.684 5.78191 218.979 6.296 218.979 8.61083V39.596ZM212.19 40.1721V8.03323C212.19 2.05484 216.865 0.319078 221.029 0.319078C225.258 0.319078 229.933 2.05336 229.933 8.03323V40.1721C229.933 46.1505 225.258 47.8877 221.029 47.8877C216.865 47.8877 212.19 46.1505 212.19 40.1721ZM247.955 1.21872L249.879 14.3957C251.425 22.9647 252.493 31.6136 253.079 40.3021H253.338V37.8587C253.401 33.4241 253.145 28.9229 253.145 24.4882V1.21872H258.717V46.9866H248.66L245.456 24.1027C244.367 18.4448 243.984 13.3026 243.406 7.90324H243.15C243.15 9.89604 243.279 11.8888 243.342 13.8166V46.9866H237.771V1.21872H247.955ZM0.0809654 25.4632C0.694827 37.6298 10.415 47.3825 22.5377 48V25.4691L0.0809654 25.4632ZM24.9725 48C37.0937 47.3825 46.814 37.6298 47.4278 25.4632H24.9755L24.9725 48ZM47.5044 23.0169V0H24.9755V23.0169H47.5044ZM22.4553 23.0198C21.8414 10.8562 12.1212 1.10201 0 0.486005V23.0169L22.4553 23.0198Z" fill="white"></path></svg>
      </div>

      </div>
      
    )
  }
  
export default Brand
