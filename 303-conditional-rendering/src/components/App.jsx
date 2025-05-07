import React from "react";
import Form from "./Form";

const isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {/* Method 2: Use ternary function */}
      {/* {isLoggedIn? <h1>Hello</h1> : <Form />} */}

      {/* Method 3: Use && */}
      {isLoggedIn == true && <h1>Hello</h1>}
      {isLoggedIn == false && <Form />}
    </div>
  );
}

export default App;
