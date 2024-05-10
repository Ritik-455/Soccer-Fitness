import React from 'react'
import Nav from '../Common/Nav'
import value from '../assets/Images/PNG/Cover.png'

function Header() {
    return (
        <>
            <div className=" bg-hero d-flex flex-column">
                <Nav />
                <div className="container-2 d-flex flex-column flex-grow-1 justify-content-center w-100">
                    <div className="row">
                        <div className="col-12 col-lg-7 d-flex align-items-center">
                            <div className="">
                                <p className=' ff-euro fw-bold mb-0 text-white text-45 lh-sm-59'>Get The eBook That Reveals The <span className=' color-yellow text-47 lh-sm-62'> 7 Fitness Myths</span>  That <span className="text_nowrap">Are Holding You Back</span> <span className="d-lg-block">From Experiencing</span> <span className="d-lg-block">Top-level Fitness</span> </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 d-flex justify-content-lg-center mt-4 mt-lg-0">
                            <img src={value} alt="value" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header