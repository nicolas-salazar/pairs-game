import React from 'react';

import { Row, Col } from 'reactstrap';

let TopScoreRow = (props) => {
    return (
        <Row style={{ paddingTop: "4.75vh" }}>
            <Col xs="8" md="8" lg="8" xl="8">
                <h6 style={{ textAlign: "center" }}>{props.userName}</h6>
            </Col>

            <Col xs="4" md="4" lg="4" xl="4">
                <h6 style={{ textAlign: "left" }}><b>{props.userScore}</b></h6>
            </Col>
        </Row>
    );
}

export default TopScoreRow;