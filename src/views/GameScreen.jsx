import React from 'react';

import { Row, Col } from 'reactstrap';

class GameScreen extends React.Component {

    render() {
        return (

            <Row>
                <Col md="8">
                    <div className="Header">
                        <div className="HeaderText">
                            <p className="pHeader">
                                Made by: <a href="https://github.com/jambis/">James Bishop</a>
                            </p>
                            <a className="aTitle" href="/">
                                <h1>
                                    <span role="img" aria-label="joker card">
                                        🃏
            </span>
            21 Card Trick
            <span role="img" aria-label="joker card">
                                        🃏
            </span>
                                </h1>
                            </a>
                            <p className="pHeader">
                                Source at:{" "}
                                <a href="https://github.com/jambis/21-card-trick">github</a>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

        );
    }
}

export default GameScreen;