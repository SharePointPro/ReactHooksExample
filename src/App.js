import React from "react";
import GlobalState from "./context/GlobalState";
import Index from "./pages/index";
import "./App.css";

function App() {
  return (
    <GlobalState>
      <Index />
    </GlobalState>
  );
}

export default App;
