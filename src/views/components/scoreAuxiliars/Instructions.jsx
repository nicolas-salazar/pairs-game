import React from 'react';

let Instructions = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <p>
                {"Voltea las cartas y encuentra todas las parejas. Un tiempo bajo aumenta tu "}
                <b>score</b> {" así que ¡date prisa!"}
            </p>
            <hr />
            <p>
                Ten cuidado, los clics también te quitan puntos
                <span aria-label="" role="img" style={{ marginLeft: 5 }}>🤔</span>
            </p>
        </div>
    );
}

export default Instructions;