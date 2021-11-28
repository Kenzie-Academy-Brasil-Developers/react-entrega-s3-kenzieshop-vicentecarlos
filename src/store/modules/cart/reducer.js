const reducerCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.value];
    default:
      return state;
  }
};

export default reducerCart;
