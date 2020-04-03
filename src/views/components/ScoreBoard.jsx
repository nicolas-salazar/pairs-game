import React from 'react';

//Componentes auxiliares:
import Title from './scoreAuxiliars/Title';
import UserScore from './scoreAuxiliars/UserScore';
import Instructions from './scoreAuxiliars/Instructions';
import TopScorePanel from './scoreAuxiliars/TopScorePanel';

//Componentes transversales requeridos:
import CustomBreak from '../../tools/components/CustomBreak';
import HeightContainer from '../../tools/components/HeightContainer';

let ScoreBoard = (props) => {
    return (
        <React.Fragment>
            <HeightContainer heightPercentage={10}>
                <Title />
            </HeightContainer>

            <HeightContainer heightPercentage={50} style={{ backgroundColor: "rgb(25,25,25)" }}>
                <TopScorePanel/>
            </HeightContainer>
            <CustomBreak heightPercentage={5} />

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