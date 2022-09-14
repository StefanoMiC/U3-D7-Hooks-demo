import { useEffect } from "react";

const NewComponent = ({ timerDone, setTimerDone }) => {
  useEffect(() => {
    let timer = null;
    console.log("New component all the time");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      console.log("tick, 3s");
    }, 3000);

    if (!timerDone) {
      setTimerDone(true);
    }

    return () => {
      if (!timerDone) {
        clearTimeout(timer);
      }

      console.log("cleanup");
    }; // componentWillUnmount()
  });

  return <div>New component</div>;
};

export default NewComponent;
