import React from "react";
import SearchbarCommon from "./SearchbarCommon.jsx";
import BtnFilled from "./buttons/BtnFilled.jsx";
import BtnUnfilled from "./buttons/BtnUnfilled.jsx";

function Header() {
    return (
        <div className="headerCont">
            <div className="headerInnerCont">
                <img src="./images/logo1.png" alt="" className="headerLogo" />
                <SearchbarCommon textDefault="looking for something particular?" style={{width: '360px'}} />
                <div id="headerBtnCont">
                    <BtnFilled name="sign up" style={{width: '80px'}} />
                    <BtnUnfilled name="log in" style={{width: '70px'}} />
                </div>
            </div>
        </div>
    );
}

export default Header;