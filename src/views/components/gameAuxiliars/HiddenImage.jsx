import React from 'react';

let HiddenImage = (props) => {
    return (
        <img key={""} alt="" className="hidden-card" src={props.imageURL} hidden />
    );
}

export default HiddenImage;