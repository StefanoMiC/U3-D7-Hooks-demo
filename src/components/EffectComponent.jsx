import { useState, useEffect } from "react";
import NewComponent from "./NewComponent";
// used to bring stateful functionality in functional components!

// 2 GOLDEN RULES OF HOOKS:
// 1) React Hooks can only be used in Functional Components
// ( no Class Components have them!, no generic JS (must be a React Functional Component))
// 2) Use Hooks at the TOP LEVEL of your component ( not inside of a loop, not inside an if/else statement, not inside OTHER functions)

const EffectComponent = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");
  const [timerDone, setTimerDone] = useState(false);

  // like componentDidMount()
  useEffect(
    () => console.log("This is happening one time, just like componentDidMount"),
    []
    // This empty array tells the hook HOW OFTEN to invoke the callback function (how many times)
    // it's called array of dependencies, since everything you're going to put here is going to be watched,
    // and upon ANY change of that dependency the callback will be invoked again.
  );

  // like componentDidUpdate that watched prevState.counter !== this.state.counter
  useEffect(() => {
    console.log("counter value just changed!");
  }, [counter]);

  useEffect(() => {
    console.log("color value just changed!");
  }, [color]);

  //componentDidUpdate with no if statement, happening all the time there's an updating phase
  useEffect(() => {
    console.log("when are we seeying this? ALL THE TIME");
  });

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <h2>The value of your counter is {counter}</h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <button onClick={() => setColor(color === "red" ? "green" : "red")}>Change Color</button>
      {color === "green" && <NewComponent timerDone={timerDone} setTimerDone={setTimerDone} />}
    </div>
  );
};

export default EffectComponent;
