const CounterReducer = (state = 15, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default CounterReducer;
