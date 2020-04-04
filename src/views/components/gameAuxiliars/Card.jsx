import React from 'react';

import { Col } from 'reactstrap';
import TweenOne from "rc-tween-one";
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";

TweenOne.plugins.push(BezierPlugin);
const animation = {
    bezier: {
        type: "thru",
        curviness: 1,
        vars: [{ x: 800, y: 0 }]
    },
    duration: 1000,
    ease: "easeInSine"
};

const cardBackImageURL = "assets/card-back.png";

let Card = (props) => {
    return (
        <Col xs="2" md="2" lg="2" xl="2" style={{ position: "relative" }}>
            <TweenOne
                animation={{
                    ...animation,
                    duration: (1000 / 7) * (props.xIndex + 1),
                    bezier: {
                        ...animation.bezier,
                        vars: [{
                            x: (props.animate) ? 100 * props.xIndex : 0,
                            y: (props.animate) ? 100 * props.yIndex : 0,
                        }]
                    }
                }}>
                <img key={""} alt="" onClick={(e) => {
                    if (props.onClickWorks) {
                        props.onClick(e, props)
                    }
                }}
                    className="card" src={(props.showCard || props.found) ? props.imageURL : cardBackImageURL}
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        position: "absolute",
                        top: (props.animate) ? -100 * props.yIndex : 0,
                        left: (props.animate) ? -100 * props.xIndex : 0,
                    }} />
            </TweenOne>
        </Col >
    );
}

export default Card;