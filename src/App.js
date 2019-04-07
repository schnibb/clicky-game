import React, { Component } from 'react';
import Header from "./components/Header";
import pics from "./pics.json";
import PicDisplay from "./components/PicDisplay";

class App extends Component {
state = {
  pics,
  score:0,
  highScore:0,
  beenClicked: []
};

increaseScore = () => {
  this.setState(prevState => {return {score: this.state.score+1}});
  console.log(this.state.score);
  if(this.state.score > this.state.highScore){
    this.setState({highScore: this.state.highScore+1});
  }
}

restartGame = () => {
  this.setState({
    score: 0,
    beenClicled: []
  })
}

onClick = (event) =>{
  let clicked = event.target.id;
  console.log(clicked);
  if(!this.state.beenClicked.includes(clicked)){
    this.setState({beenClicked: this.state.beenClicked.push(clicked)});
    console.log(this.state.beenClicked);
    this.increaseScore();
  }else{
    this.restartGame();
  }
};

  render() {
    const jumblePics = (pics) =>{
      let currentIndex = pics.length;
      let temporaryValue;
      let randomIndex;

      while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        temporaryValue = pics[currentIndex];
        pics[currentIndex] = pics[randomIndex];
        pics[randomIndex] = temporaryValue;
      }
      return pics;
    }
    jumblePics(pics);

    return (
      <div>
      <Header 
        score={this.state.score}
        highScore={this.state.highScore}
      />
      {this.state.pics.map(pics => (
        <PicDisplay
          id={pics.id}
          image={pics.image}
          onClick={this.onClick}
        />
      ))}
      </div>
    );
  }
}

export default App;
