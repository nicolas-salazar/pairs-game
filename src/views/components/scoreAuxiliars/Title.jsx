import React from 'react';

let Title = (props) => {
    return (
        <div className="Header" style={{ marginTop: 10 }}>
            <div className="HeaderText">
                <h1>
                    <span role="img" aria-label="joker card">🃏</span>
                        Pairs
                    <span role="img" aria-label="joker card">🃏</span>
                </h1>
            </div>
        </div>
    );
}

export default Title;