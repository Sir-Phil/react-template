import React from 'react'
import Slider from 'react-slick';


const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        // appendDots: dots => (
        //   <div
        //     style={{
        //       backgroundColor: "#fff",
        //       borderRadius: "10px",
        //       padding: "10px"
        //     }}
        //   >
        //     <ul>{dots}</ul>
        //   </div>
        // )
      };

  return (
    <div className="max-w-6xl mx-auto mt-[5rem] px-0 sm:px-6">
      <Slider {... settings}>
        <div>
            <img src="https://res.cloudinary.com/sirphil/image/upload/v1682881029/wjm/wjm14_pidj1z.jpg" />
        </div>
        <div >
        <img className="mx-auto" src="https://res.cloudinary.com/sirphil/image/upload/v1682881029/wjm/wjm12_szzjwf.jpg" />
        </div>
        <div >
        <img className="mx-auto" src="https://res.cloudinary.com/sirphil/image/upload/v1682881028/wjm/wjm1_gjuicb.jpg"/>
        </div>
        <div>
          <img className="mx-auto" src="https://res.cloudinary.com/sirphil/image/upload/v1682881028/wjm/wjm2_xiuiz3.jpg" alt="" />
        </div>
    </Slider>
    </div>
  )
}

export default Carousel
