import React from 'react'
import Comnbtn from '../Common/Cmnbtn'
import downellips from '../assets/Images/PNG/download-ellips.png'

function Download() {
    return (
        <>
            <div className="bg-black mt-neg-3 position-relative">
                <div className="container-2 py-download">
                    <div className="download-box position-relative " data-aos="zoom-in">
                        <p className=' ff-manrope fw-normal text-18 lh-28 text-center color-grey'>If you’re reading this, most likely you’re in search of the keys that unlock world class performance…..performance that can get you to the next level of your playing career …. And let you create a lifestyle that you’ve always dreamed of… right?</p>
                        <p className=' ff-manrope fw-normal text-18 lh-28 text-center color-grey'>Well there’s a big obstacle in your way…… one that you most likely don’t even notice….. like a hacker whose stolen your starting spot…..and you have no control over it.</p>
                        <p className=' ff-manrope fw-normal text-18 lh-28 text-center color-grey'>That annoying little hacker is simply a lack of knowledge. Sounds ridiculous, right? Stick with me here…. If I knew back then (in my playing days) what I know now, I would probably still be playing instead of writing this eBook.</p>
                        <p className=' ff-manrope fw-normal text-18 lh-28 text-center color-grey'>Early on in my career I realized that in order to get to the next level I needed to get stronger, pack on some lean muscle, improve my endurance, increase my sprint speed & develop robust change of direction qualities.</p>
                        <p className=' ff-manrope fw-normal text-18 lh-28 text-center color-grey'>Problem was... I had no idea how to improve these qualities. I needed help. I spent majority of my time researching on social media platforms & doing workouts that got me minimal results.</p>
                        <p className=' ff-manrope fw-normal text-18 lh-28 text-center color-grey'>Once I figured out the secret sauce to improving all the qualities mentioned above, getting fit became effortless. No more stress, disappointment, anger or frustration. I want you to feel that too. This short eBook can provide you with the tools you need to start getting better results out of your current programs, while doing less not more.</p>
                        <div className=" d-flex justify-content-center">
                            <div className=" mt-32">
                                <Comnbtn text="DOWNLOAD NOW" />
                            </div>
                        </div>
                        <div className="box-ellips position-absolute box-ellips-pos d-none d-lg-block"></div>
                    </div>
                </div>
                <div className="position-absolute down-pos">
                    <img src={downellips} alt="downellips" />
                </div>
            </div>
        </>
    )
}

export default Download