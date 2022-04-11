import React from "react";

function BtnFilled(props) {
    return (
        <div className="btnFilled" style={props.style}>
            {props.name}
        </div>
    );
}

export default BtnFilled;