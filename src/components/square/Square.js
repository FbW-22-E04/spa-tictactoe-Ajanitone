import { Context } from "../utils/Context";
import { useContext } from "react";

function Square({ number, playerLetter }) {
  const { state, dispatch } = useContext(Context);
  return (
    <button
      className="square"
      onClick={() => dispatch({ type: "clicked", number: number })}
    >
      {playerLetter}
    </button>
  );
}

export default Square;
