import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./components/utils/Context";
import "./styles/index.css";

import Game from "./components/game/Game";

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Game />
  </ContextProvider>
);
