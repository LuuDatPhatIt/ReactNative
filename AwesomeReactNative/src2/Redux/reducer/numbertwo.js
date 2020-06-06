const numbertwo = (state = 2, action) => {
  if (action.type === 'ADD_TWO') {
    return state + 10;
  }
  return state;
};

export default numbertwo;
