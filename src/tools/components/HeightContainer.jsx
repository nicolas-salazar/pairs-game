import React from 'react';

let HeightContainer = (props) => {
    return (
        <div style={{ height: (props.heightPercentage) ? props.heightPercentage + "vh" : "10vh" }}>
            {props.children}
        </div>
    );
}

export default HeightContainer;