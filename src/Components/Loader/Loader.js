import React from "react";
import './Loader.css';

export default () =>
    // <div className="main-div">
    //     <div className="lds-ripple">
    //         <div></div>
    //         <div></div>
    //     </div>
    // </div>

    <div className="main-div">
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>