import React from 'react';

let Instructions = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <p>
                {"Voltea las cartas y encuentra todas las parejas. El tiempo disminuye tu "}
                <b>score</b> {" así que ¡date prisa!"}
                <hr/>
                Ten cuidado, los clics también te quitan puntos 🤔
            </p>
        </div>
    );
}

export default Instructions;