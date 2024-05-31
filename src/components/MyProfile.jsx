import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";

import { vidusha } from "../assets";

const MyProfile = () => {

    const showMore = () => {
        alert("vidusah")
    }

    return(
        <div className="w-[170px] cursor-point" onClick={() => {showMore}}>
            <img src={vidusha} className="rounded-3xl border-4 border-indigo-900	border-color: rgb(49 46 129); outline outline-offset-2 outline-blue-500 mt-0" />
        </div>
    )
}

export default SectionWrapper(MyProfile,"");