import {Fragment, useState } from "react";

const Main = () => {

  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [player, setPlayer] = useState("")
  const [select, setSelect] = useState("")
  const [chosenPlayer, setChosenPlayer] = useState("")
  const [box, setBox] = useState("")

  const selectPlayer = ()=>{
    setSelect(
        <div>
          <div id="player1" className="btn-dom" onClick={chosePlayer}>Player1{player}</div><div id="player2" className="btn-dom" onClick={chosePlayer}>Player2{player}</div><div>{chosenPlayer}</div>
        </div>
      )
  }

  const chosePlayer = (event)=>{
    const id = event.target.id
    if (id === "player1"){
      setPlayer1("X")
      setPlayer(player1)
      setChosenPlayer(<Fragment><p>You: X</p><p>CPU: O</p></Fragment>)
    }else{
      setPlayer2("O")
      setPlayer(player2)
      setChosenPlayer(<Fragment><p>You: O</p><p>CPU: X</p></Fragment>)
    }
  }


  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <div className="button" onClick={selectPlayer}>Select player{select}</div>
      <div id="pl-sel">
        <div id="one" className="box1">{box}</div>
        <div id="2" className="box1">{box}</div>
        <div id="3" className="box1">{box}</div>
        <div id="4" className="box2">{box}</div>
        <div id="5" className="box2">{box}</div>
        <div id="6" className="box2">{box}</div>
        <div id="7" className="box3">{box}</div>
        <div id="8" className="box3">{box}</div>
        <div id="9" className="box3">{box}</div>
      </div>
    </div>
  );
};

export default Main;
