import React from 'react';
import PointChecker from './PointChecker';
import PointDisplay from './PointDisplay';

let endGameCount = 0; // Skapar en variabel som räknar för varje tärnings-kast. 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceVal: 0,
            computerDiceVal: 0,
            endGame: false,
            diceBtnDisabled: {
              btn1: false,
              btn2: false,
              btn3: false,
          },
        }
        this.handleClick = this.handleClick.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.randomCompDice = this.randomCompDice.bind(this);
    }

    // Skapar en method som uppdaterar states och som dynamiskt sätter värde på mina keys.
    handleClick(randomNum, btn) {
      this.setState((prevState) => ({ diceVal: prevState.diceVal + randomNum }));
      this.setState({ diceBtnDisabled: { 
          ...this.state.diceBtnDisabled, 
          [btn]: true
        } 
      });
      this.randomCompDice();
      endGameCount++;
      if (endGameCount === 3) this.setState({ endGame: true });
  }
    // Skapar en method som summerar spelets tärnings-kast
    randomCompDice() {
        this.setState((prevState) => ({ computerDiceVal: prevState.computerDiceVal + (Math.floor(Math.random() * 6) + 1) }));
    }

    // Resettar alla states. 
    restartGame() {
        endGameCount = 0;
        this.setState({
            diceVal: 0,
            computerDiceVal: 0,
            diceBtnDisabled: {
                btn1: false,
                btn2: false,
                btn3: false
            },
            endGame: false,
        })
    }

    render() {
        return (
            <div>
                <h1 style={h1Style}>Detta är Tärningsspelet. Försök vinna över datorn genom att slå högst nummer med tärningarna.</h1>
                <section>
                    <PointChecker handleClick={this.handleClick} diceBtnDisabled={this.state.diceBtnDisabled} />
                    <PointDisplay diceVal={this.state.diceVal} compVal={this.state.computerDiceVal} endGame={this.state.endGame} restartGame={this.restartGame}
                    />
                </section>
            </div>
        )
    }
}

let h1Style = {
  color: 'green',
  fontSize: '30px',
  textAlign: 'center',
}

export default App;