import React from "react";

function SearchbarCommon(props) {
    return (
        <div className="searchbarCommonCont" style={props.style}>
            {props.textDefault}
        </div>
    );
}

export default SearchbarCommon;