import React from 'react';

const getRandomValue = () => Math.floor(Math.random() * 6) + 1;

const PointDisplay = props => {
    const handleBtnClick = (e) => props.handleClick(getRandomValue(), e.target.id);
    return (
        <div style={divStyling}>
            <button style={btnStyling} id={'btn1'} onClick={(e) => handleBtnClick(e)} disabled={props.diceBtnDisabled.btn1}>Kasta första tärningen</button>
            <button style={btnStyling} id={'btn2'} onClick={(e) => handleBtnClick(e)} disabled={props.diceBtnDisabled.btn2}>Kasta andra tärningen</button>
            <button style={btnStyling} id={'btn3'} onClick={(e) => handleBtnClick(e)} disabled={props.diceBtnDisabled.btn3}>Kasta tredje tärningen</button>
        </div>
    )
}

let divStyling = {
    display: 'flex',
    justifyContent: 'center',
}

let btnStyling = {
    fontSize: '18px',
    margin: '20px 8px'
}

export default PointDisplay;
