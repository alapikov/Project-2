import React, {useState} from "react";

function Addtocart(props) {
    const [name, setName] = useState('Add to Cart');

    return (
        <div className="AddtocartBtn" style={props.style} onClick={() => setName('In Cart')}>
            {name}
        </div>
    );
}

export default Addtocart;