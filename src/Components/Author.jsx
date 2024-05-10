import React from 'react'
import men from '../assets/Images/PNG/author-img.png'
import { Instagram } from '../Common/Icon'
import authorright from '../assets/Images/PNG/author-right-ellips.png'
import authorleft from '../assets/Images/PNG/author-left-ellips.png'
import imgellips from '../assets/Images/PNG/img-ellips.png'

function Author() {
    return (
        <>
            <div className=" bg-black mt-neg-3 position-relative">
                <div className="container-2 py-author">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="position-relative">
                                <img src={men} alt="men" className=' w-100 max-w-539' data-aos="zoom-in"/>
                                <div className="position-absolute img-pos d-none d-xl-block">
                                    <img src={imgellips} alt="imgellips" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-end justify-content-md-end mt-4 mt-md-0">
                            <div className=" max-w-502">
                                <p className=' ff-euro text-30 lh-37 text-white mb-0'>About the<span className=' color-yellow'> Author</span></p>
                                <p className=' ff-manrope fw-normal text-18 lh-28 color-grey mb-0 mt-1 mt-md-3'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</p>
                                <p className=' ff-manrope fw-normal text-18 lh-28 color-grey mb-0 mt-10'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</p>
                                <p className=' ff-manrope fw-normal text-18 lh-28 color-grey mb-0 mt-10'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</p>
                                <div className="">
                                    <div className="d-flex gap-3 mt-30">
                                        <Instagram />
                                        <p className=' ff-euro text-26 lh-33 color-grey mb-0'>Hypervive</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" position-absolute author-pos d-none d-lg-block">
                    <img src={authorright} alt="authorright" />
                </div>
                <div className=" position-absolute author-pos-2 d-none d-xl-block">
                    <img src={authorleft} alt="authorleft" />
                </div>
            </div>
        </>
    )
}

export default Author