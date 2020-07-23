import React, { useState, useEffect } from "react";

const _TestingHooks = () => {
  return <div>Export_1</div>;
};

export const __TestingHooks = () => {
  return <div>Export_2</div>;
};

const TestingHooks = ({ initialState = 0 }) => {
  const [count, setCount] = useState(initialState);
  const [state, setState] = useState(9);

  //   [1]  componentDidMount && componentWillUnmount()
  useEffect(() => {
    //  componentDidMount()
    setCount(Date.now());
    return () => {
      //    componentWillUnmount()
    };
  }, []);

  //   [1a] only componentDidMount [similarly, simply dont include componentDidMount part to get only componentWillUnmount functionality]
  useEffect(() => {
    //  componentDidMount()
  }, []);

  //   [2]  every update possible
  useEffect(() => {
    //  on Everything - componentDidMount() + componentDidUpdate()
  });

  useEffect(() => {
    //  on custom trigger, for example on change of state
    console.log("dupaaa");
  }, [state]);

  return <div onClick={() => setState(state + 1)}>{String(count)}</div>;
};

export { _TestingHooks };
export default TestingHooks;
