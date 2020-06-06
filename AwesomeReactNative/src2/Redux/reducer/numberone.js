const numberone = (state = 1, action) => {
  if (action.type === 'ADD_ONE') {
    return state + 1;
  }
  return state;
};

export default numberone;
