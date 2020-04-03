import React from 'react';

//Componentes auxiliares:
import Title from './scoreAuxiliars/Title';
import Instructions from './scoreAuxiliars/Instructions';

let ScoreBoard = (props) => {
    return (
        <React.Fragment>
            <Title />
            <Instructions />
        </React.Fragment>
    );
}

export default ScoreBoard;