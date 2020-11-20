import React from "react";
import "./App.css";
import useCoreContext from "./core/context/CoreContext";

function App() {
  const { visibility } = useCoreContext();

  return (
    <div
      style={visibility ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      {/** Any types of components goes here. Maybe some routing? */}
    </div>
  );
}

export default App;
