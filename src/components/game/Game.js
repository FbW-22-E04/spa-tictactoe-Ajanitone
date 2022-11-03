import Board from "../board/Board";
import { useContext } from "react";
import { Context } from "../utils/Context";
import React from "react";

function Game() {
  //  const submitBoard  =() => {

  //  };

  const { state, dispatch } = useContext(Context);
  return (
    <article className="game ">
      <section className="row">
        <div className=" game-board">
          <Board />
        </div>
        <div className=" game-info">
          <ul className="buttonList">
            <li>
              <button onClick={() => dispatch({ type: "reset" })}>
                Start the Game
              </button>
            </li>
            {state.moves.map((move, idx) => (
              <li key={idx + 1}>
                <button
                  onClick={() =>
                    dispatch({ type: "goTo", move: move, idx: idx })
                  }
                >
                  Go to #{idx + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

export default Game;
