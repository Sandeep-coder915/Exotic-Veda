import React from 'react'
import './container.css'
import banner from  "./Con-assets/CERTIFICATION BANNERS22-01.png"
const Container = () => {
  return (<div className='rr'>
     <img src={banner} width={"44%"} height={"44%"}></img>
    <div className='Container-Section'>
      <p>Crafted by nature enthusiasts who were inspired by the rich traditions of Ayurveda, Exotic Veda was born out of a desire to create natural products that truly honor the beauty of your skin and hair. Frustrated by synthetic options that lacked authenticity, we turned to ancient wisdom to develop pure, effective solutions for holistic well-being</p>

      <button className='btn'>Explore Our Store  </button>
    </div>
   
    </div>
  )
}

export default Container
