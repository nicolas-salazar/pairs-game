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

const cardBackImageURL = "https://i.ya-webdesign.com/images/bicycle-card-back-png-2.png";

class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            isTheCardFlipped: false
        }
    }

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
                    <img key={""} alt="" onClick={this.onClick}
                        src={(this.state.isTheCardFlipped) ? this.props.imageURL : cardBackImageURL}
                        style={{
                            width: "100%", 
                            cursor: "pointer",
                            position: "absolute",
                            top: -100 * this.props.yIndex,
                            left: -100 * this.props.xIndex,
                        }} />
                </TweenOne>
            </Col >
        );
    }

    //Métodos operativos:
    onClick = (e) => {
        console.log("(" + this.props.xIndex + "," + this.props.yIndex + ")");
        this.setState({ isTheCardFlipped: !this.state.isTheCardFlipped });
    }
}

export default Card;