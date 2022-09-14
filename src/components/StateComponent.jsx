import { useState } from "react";
// used to bring stateful functionality in functional components!

// 2 GOLDEN RULES OF HOOKS:
// 1) React Hooks can only be used in Functional Components
// ( no Class Components have them!, no generic JS (must be a React Functional Component))
// 2) Use Hooks at the TOP LEVEL of your component ( not inside of a loop, not inside an if/else statement, not inside OTHER functions)

// state = {
//     counter: 0
// }

//  this.state.counter

const StateComponent = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("Stefano"); // in the parenthesys you have the initial value for your state
  // first value is your state value
  // second value is the setter function that will allow to update the state and render the JSX again

  return (
    <div>
      <h2>STATE HOOK EXAMPLE</h2>

      <div>
        <div>Current user is {username}</div>
        <button onClick={() => setUsername("Tereza")}>Change Username</button>
      </div>
      <div>
        <h2>The value of your counter is {counter}</h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
};
export default StateComponent;
