import React from 'react'
import Cmnbtn from './Cmnbtn'

function Nav() {

    return (
        <>
            <div className=" container-2 w-100 ">
                <nav className=' d-flex justify-content-between pt-4 align-items-center '>
                    <p className=' text-white ff-euro  mb-0 cursor-pointer'>logo</p>
                    <ul className={` d-flex  gap-4 align-items-center `}>
                        <li><Cmnbtn text="GET IN TOUCH"/></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav