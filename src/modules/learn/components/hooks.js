const { useState, useEffect } = require('react');

/**
 * Extended useState to support callback which gets called once state is updated and rendered
 * @param {any} initialVal initial value for the state
 * @returns state and setState functions
 */
export const useStateWithCallback = (initialVal, callback) => {
  console.log('Executing useStateWithCallback hook');
  const [state, setState] = useState(initialVal);
  useEffect(() => {
    console.log('useEffect called with state val ', state);
    callback(state);
  }, [state, callback]);
  return [state, setState];
};
