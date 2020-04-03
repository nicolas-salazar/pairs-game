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

class Card extends React.Component {

    render() {
        return (

            <Col xs="2" md="2" lg="2" xl="2" style={{ position: "relative" }}>
                <TweenOne
                    animation={{
                        ...animation,
                        duration: (1000 / 7) * (this.props.xIndex + 1),
                        bezier: {
                            ...animation.bezier,
                            vars: [{
                                x: 100 * this.props.xIndex,
                                y: 100 * this.props.yIndex,
                            }]
                        }
                    }}>
                    <img key={""} alt="" style={{
                        width: "100%",
                        position: "absolute",
                        top: -100 * this.props.yIndex,
                        left: -100 * this.props.xIndex,
                    }}
                        src={"https://deckofcardsapi.com/static/img/QS.png"} />
                </TweenOne>
            </Col >
        );
    }
}

export default Card;