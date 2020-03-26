import React, { useState, useEffect } from "react";

const _TestingHooks = () => {
  return <div>Export_1</div>;
};

export const __TestingHooks = () => {
  return <div>Export_2</div>;
};

const TestingHooks = ({ initialState = 0 }) => {
  const [state, setState] = useState(initialState);

  //   [1]  componentDidMount && componentWillUnmount()
  useEffect(() => {
    //  componentDidMount()
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
  }, [state]);

  return <div>Default Export</div>;
};

export { _TestingHooks };
export default TestingHooks;
