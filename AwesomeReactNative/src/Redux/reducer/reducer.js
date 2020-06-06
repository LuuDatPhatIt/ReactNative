const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        number: state.number + 1,
      };
  }
  return state;
};

export default reducer;
