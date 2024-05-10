import React from 'react'
import knowright from '../assets/Images/PNG/knowledge-right.png'

function Knowledge() {
    return (
        <>
            <div className="bg-knowledge">
                <div className="container-2">
                    <div className="row py-50">
                        <div className="col-12 col-md-8 d-flex align-items-center">
                            <div className="">
                                <p className=' ff-euro text-30 lh-sm-49 mb-0'>With The Right Knowledge Maintaining And Improving Your Fitness Becomes Effortless And Enjoyable. Stop Wasting Time You Don’t Have!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src={knowright} alt="knowright" className=' img-width' data-aos="flip-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Knowledge