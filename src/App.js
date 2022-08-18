import "./App.css";
import Footer from "./components/Footer";
// import { useState } from "react";
// import Parent from "./components/Parent";
// import Greeting from "./components/Greeting";
import Netflix from "./components/Netflix";

function App() {
  // const [clock, setClock] = useState("");

  // const newDate = new Date().toLocaleDateString();

  // const time = () => {
  //   const date = new Date();
  //   const uptime = date.toLocaleTimeString();
  //   setClock(uptime);
  // };
  // setInterval(time, 1000);

  return (
    <>
      {/* <h1>Hello React world!</h1>
      <h2>Todays date is {newDate} </h2>
      <h3>The current time is {clock}</h3>

      <Parent />

      <Greeting /> */}
      <Netflix />

      <Footer />
    </>
  );
}

export default App;
