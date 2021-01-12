import React from 'react';

// Skapar logik som läser av ifall det är vinst, förlust eller oavgjort.
const chooseWinner = (diceVal, compVal) => {
    let champ = '';
    if (diceVal > compVal) {
        champ = 'Winner winner, chicken dinner (Vinst)';
    } else if (diceVal < compVal) {
        champ = 'Bättre lycka nästa gång (Förlust)';
    } else if (diceVal === compVal) {
        champ = 'Tyvärr, det blev lika (Oavgjort)';
    }
    return champ;
}

// Skapar en funktion för spela igen logik
const PointDisplay = props => {
    let restart = '';
    let champ = '';
    if (props.endGame) {
        champ = chooseWinner(props.diceVal, props.compVal);
        restart = <button style={btnStyling} onClick={props.restartGame}>Spela igen</button>;
    }
    return (
        <div style={divStyling}>
            <h2>{ champ }</h2>
            <p style={pStyle}>Din totala poäng: { props.diceVal }</p>
            <p style={pStyle}>Datorns totala poäng: { props.compVal }</p>
            {restart}
        </div>
    )
}

let btnStyling = {
    fontSize: '18px'
}

let divStyling = {
    textAlign: 'center'
}

let pStyle = {
    fontSize: '20px'
}


export default PointDisplay;