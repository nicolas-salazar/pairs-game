import React from 'react';

import { Row, Col, Input, Form, FormGroup, Button } from 'reactstrap';

//Utilidad de base de datos:
import { firestoreDB } from '../../../firebase';

let ScoreSenderForm = (props) => {
    return (
        <Row>
            <Col xs="2" md="3" lg="3" xl="3" />

            <Col xs="10" md="6" lg="6" xl="6">
                <Form style={{ textAlign: "center", marginTop: "15vh" }}
                    onSubmit={(e) => { formSubmit(e, props) }}>
                    <FormGroup>
                        <h5>Sube tu score</h5>

                        <Row>
                            <Col xs="3" md="3" lg="3" xl="3" />

                            <Col xs="6" md="6" lg="6" xl="6">
                                <Input
                                    name="nickname"
                                    placeholder="Aquí va un nick para la historia 😉"
                                    style={{ width: "100%", marginTop: 20 }} />

                                <div style={{ marginTop: 20 }}>
                                    <Button>
                                        <span aria-label="" role="img">🤟</span>
                                    </Button>
                                </div>
                            </Col>

                            <Col xs="3" md="3" lg="3" xl="3" />
                        </Row>
                    </FormGroup>
                </Form>
            </Col>

            <Col xs="2" md="3" lg="3" xl="3" />
        </Row>
    );
}

let formSubmit = (e, props) => {
    e.preventDefault();

    firestoreDB.collection("userScores").add({
        gameScore: props.finalScore,
        userName: e.target.nickname.value
    })
        .then(() => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
}

export default ScoreSenderForm;