import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import PrimaryButton from "./components/button/primary/";

function App() {
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <PrimaryButton text="TEST" onClick={() => {alert("foo");}}/>
    </div>
  );
}

export default App;
