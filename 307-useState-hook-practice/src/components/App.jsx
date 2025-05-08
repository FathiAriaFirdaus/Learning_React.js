import React from "react";

function App(props) {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(now);

  function updateTime(){
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
