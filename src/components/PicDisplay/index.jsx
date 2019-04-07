import React from "react";

function PicDisplay(props){
    return(
        <div className="pics">
            <img id={props.id} src={props.image} alt="" onClick={props.onClick} />
        </div>
    );
};

export default PicDisplay;