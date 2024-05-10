import React from 'react'
import lap from '../assets/Images/PNG/fitness-laptop-img.png'

function Fitness() {
    return (
        <>
            <div className=" bg-lineargradient mt-neg-3">
                <div className="container-2 ">
                    <div className="fitness-box position-relative">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex align-items-center align-items-xl-start">
                                <div className="">
                                    <p className=' ff-euro text-45 lh-sm-59 mb-0 text-black max-w-520'>7 Fitness Myths to Avoid</p>
                                    <p className=' ff-manrope fw-normal text-18 lh-28 mb-0 text-black'>Grab your free copy now!</p>
                                    <div className="position-relative btn-border-2 w-contant mt-32">
                                        <button className=' download-btn ff-euro text-16 lh-16 color-grey '>Download For Free</button>
                                        <div className="btn-black-border-2 position-absolute line-pos2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-4 mt-md-0">
                                <div className="position-xl-absolute lap-pos"><img src={lap} alt="lap" className=' w-100' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fitness