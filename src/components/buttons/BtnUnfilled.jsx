import React from "react";

function BtnUnfilled(props) {
    return (
        <div className="btnUnfilled" style={props.style}>
            {props.name}
        </div>
    );
}

export default BtnUnfilled;