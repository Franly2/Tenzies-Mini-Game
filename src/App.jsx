import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice);
  const [tenzies, setTenzies] = React.useState(false);
  const [howMuchRoll, setHowMuchRoll] = React.useState(0);

  React.useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allDiceValue = dice.every((die) => die.value === firstValue);
    if (allDiceHeld && allDiceValue) {
      setTenzies(true);
      console.log("You  Won");
    }
  }, [dice]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(generateNewDice());
    }
    return newArray;
  }

  function rollDice() {
    if (!tenzies) {
      setHowMuchRoll((oldValue) => oldValue + 1);
      setDice((oldDice) => {
        return oldDice.map((dice) => {
          return dice.isHeld ? dice : generateNewDice();
        });
      });
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setHowMuchRoll(0);
    }
  }

  function holdDice(id) {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  let diceElements = dice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        isHeld={die.isHeld}
        held={() => holdDice(die.id)}
      />
    );
  });

  return (
    <div className="App h-screen ">
      {tenzies && <Confetti />}
      <main className="flex flex-col justify-center items-center m-auto mt-20 w-[360px] h-[380px] px-[20px] py-[30px] rounded-lg  bg-[#F5F5F5] ">
        <p className="text-black font-semibold text-xl">Roll : {howMuchRoll}</p>
        <div className="bg-[#F5F5F5] w-full h-full rounded-md p-3">
          <h1 className="text-[25.6px]">Tenzies</h1>
          <p className="font-[##4A4E74] text-[14px]">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <section className="mt-9 grid grid-rows-2 grid-cols-5 gap-5 w-[90%] ml-3.5">
            {diceElements}
          </section>
          <button
            className=" mt-8 bg-[#535353] h-9 w-24 text-white rounded-md"
            onClick={rollDice}
          >
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
