import React from 'react';

//Componentes auxiliares:
import Title from './components/scoreAuxiliars/Title';
import UserFinalScore from './components/overAuxiliars/UserFinalScore';

//Componentes transversales requeridos:
import CustomBreak from '../tools/components/CustomBreak';
import HeightContainer from '../tools/components/HeightContainer';

let GameOver = (props) => {
    return (
        <React.Fragment>
            <HeightContainer heightPercentage={10}>
                <Title />
            </HeightContainer>

            <CustomBreak heightPercentage={10} />
            <HeightContainer heightPercentage={50}>
                <UserFinalScore />
            </HeightContainer>

        </React.Fragment>
    );
}

export default GameOver;