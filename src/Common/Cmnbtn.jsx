import React from "react";

function Comnbtn(props) {
    return (
        <div className="button-border position-relative w-contant">
            <button className={` ${props.spacing} cmn-btn ff-euro fw-bold text-14 lh-14   `}>
                {props.text}
            </button>
            <div className="btn-black-border position-absolute line-pos"></div>
        </div>
    )
}
export default Comnbtn