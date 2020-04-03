import React from 'react';

//Componentes auxiliares:
import TopScoreRow from './TopScoreRow';

class TopScorePanel extends React.Component {

    render() {
        return (
            <div style={{ paddingTop: 15 }}>
                <h4>Top <b>Score</b></h4>
                <TopScoreRow userName="the Salazar" userScore={5000}/>
                <TopScoreRow userName="iromeolover" userScore={15000}/>
                <TopScoreRow userName="the Salazar" userScore={12500}/>
                <TopScoreRow userName="the Salazar" userScore={1200}/>
                <TopScoreRow userName="the Salazar" userScore={1000}/>
            </div>
        );
    }
}

export default TopScorePanel;