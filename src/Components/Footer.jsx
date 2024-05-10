import React from 'react'
import { Tiktok, Insta } from '../Common/Icon'

function Footer() {
    return (
        <>
            <div className=' bg-light-black mt-neg-3'>
                <div className="container-2 pt-69">
                    <p className=' ff-euro text-26 lh-33 color-grey mb-0 text-center'>Hypervive</p>
                    <p className=' ff-manrope fw-normal text-14 lh-23 mb-0 text-white mt-19 text-center'>Connect with us on social media</p>
                    <div className="d-flex gap-10 justify-content-center mt-3">
                        <div className="icon-box d-flex justify-content-center align-items-center">
                            <Tiktok />
                        </div>
                        <div className="icon-box d-flex justify-content-center align-items-center">
                                <Insta />
                        </div>
                    </div>
                </div>
                <div className="footer-line w-100"></div>
                <p className=' ff-manrope fw-normal text-14 lh-23 text-center text-white mb-0 mt-10 pb-10'>Copyright © {new Date().getFullYear()} HyperVive | All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer