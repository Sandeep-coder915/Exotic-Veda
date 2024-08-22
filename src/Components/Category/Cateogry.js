import React from 'react'
import img from './Assets/Untitled design (65).png'
import img2 from './Assets/Untitled design (65).png'
const Cateogry = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Our Categories</h1>
            <div className='Container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card1'>
                            <img src={img} style={{ borderRadius: "50%" }} alt='img' height={'300px'}></img>
                            <div className='card-body'>
                                <h5 className='card-title'>Skin care </h5>
                                <p className='card-text'>Reveal Your Natural Beauty</p>
                                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                            </div>

                    <div className='col-md-4'>
                        <div className='card1'>
                            <img src={img} alt='img' style={{ borderRadius: "50%" }} height={'300px'} ></img>
                            <div className='card-body'>
                                <h5 className='card-title'>Dietary Use </h5>
                                <p className='card-text'>Healthy Choices, Happy You</p>
                                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card1'>
                            <img src={img} alt='img' style={{ borderRadius: "50%" }} height={'300px'}></img>
                            <div className='card-body'>
                                <h5 className='card-title'>hair Care </h5>
                                <p className='card-text'>Revive Your Hair's Natural Beauty</p>
                                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div></div>
    )
}

export default Cateogry
