import React from 'react';

let CustomBreak = (props) => {
    let fullMargin = (props.heightPercentage || 10) / 2;

    return (
        <hr style={{ marginTop: fullMargin + "vh", marginBottom: fullMargin + "vh" }} />
    );
}

export default CustomBreak;