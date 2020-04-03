import React from 'react';

//Componentes auxiliares:
import Title from './scoreAuxiliars/Title';
import UserScore from './scoreAuxiliars/UserScore';
import Instructions from './scoreAuxiliars/Instructions';

//Componentes transversales requeridos:
import CustomBreak from '../../tools/components/CustomBreak';
import HeightContainer from '../../tools/components/HeightContainer';

let ScoreBoard = (props) => {
    return (
        <React.Fragment>
            <HeightContainer heightPercentage={10}>
                <Title />
            </HeightContainer>

            <CustomBreak heightPercentage={5} />

            <HeightContainer heightPercentage={50}>

            </HeightContainer>

            <HeightContainer heightPercentage={10}>
                <UserScore />
            </HeightContainer>

            <CustomBreak heightPercentage={5} />

            <HeightContainer heightPercentage={20}>
                <Instructions />
            </HeightContainer>
        </React.Fragment>
    );
}

export default ScoreBoard;