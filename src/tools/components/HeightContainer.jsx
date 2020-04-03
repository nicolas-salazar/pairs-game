import React from 'react';

let HeightContainer = (props) => {
    return (
        <div style={{
            height: (props.heightPercentage) ? props.heightPercentage + "vh" : "10vh",
            overflow: "hidden", ...props.style
        }}>
            {props.children}
        </div>
    );
}

export default HeightContainer;