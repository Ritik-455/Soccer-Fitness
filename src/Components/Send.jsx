import React from 'react'
import laptop from '../assets/Images/PNG/laptop.png'
import Comnbtn from '../Common/Cmnbtn'
import sendellips from '../assets/Images/PNG/send-ellips.png'


function Send() {
    return (
        <>
            <div className="bg-black mt-neg-3 position-relative">
                <div className="container-2 pb-send">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={laptop} alt="laptop" className=' w-100 position-relative z-2 ' data-aos="fade-down" />
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center mt-5 mt-lg-0 justify-content-md-end">
                            <div className='' >
                                <h2 className=' ff-euro text-30 lh-sm-37 mb-0 text-white max-w-522' data-aos="fade-down">Let me know where <span className=' color-yellow'> you want me to send it</span></h2>
                                <div className='mt-29'>
                                    <input type="text" className=' form-box ff-manrope fw-normal text-16 lh-21' placeholder="Name" data-aos="fade-down"/>
                                </div>
                                <div>
                                    <input type="email" className=' form-box ff-manrope fw-normal text-16 lh-21 mt-13' placeholder="Email" data-aos="fade-down"/>
                                </div>
                                <div className=" mt-47" data-aos="fade-down">
                                    <Comnbtn text="Send It Here!" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute send-pos d-none d-xl-block">
                    <img src={sendellips} alt="sendellips" />
                </div>
                <div className="lap-ellips position-absolute lap-elips-pos d-none d-xl-block d-xxxl-none"></div>
            </div>
        </>
    )
}

export default Send