import React from 'react';

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
            <TweenOne animation={{
                ...animation, duration: (1000 / 7) * 2,
                bezier: {
                    ...animation.bezier, vars: [{
                        x: this.props.xIndex * (this.props.cardSize.width) + 10,
                        y: this.props.yIndex * (this.props.cardSize.width / 0.76) + 10
                    }]
                },
            }}>
                <img key={""} alt="" src={"https://deckofcardsapi.com/static/img/QS.png"}
                    style={{
                        width: this.props.cardSize.width,
                        height: (this.props.cardSize.width / 0.76),
                        position: "absolute", left: "0%", top: "0%",
                        paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5,
                    }} />
            </TweenOne>
        );
    }
}

export default Card;