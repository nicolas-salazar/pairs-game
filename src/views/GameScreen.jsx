import React from 'react';

import { Row, Col } from 'reactstrap';

//Componentes auxiliares:
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

class GameScreen extends React.Component {

    render() {
        return (

            <Row>
                <Col xs="12" md="8" lg="8" xl="8" style={{ height: "100vh" }}>
                    <GameBoard />
                </Col>

                <Col xs="12" md="4" lg="4" xl="4">
                    <ScoreBoard />
                </Col>
            </Row>

        );
    }
}

export default GameScreen;