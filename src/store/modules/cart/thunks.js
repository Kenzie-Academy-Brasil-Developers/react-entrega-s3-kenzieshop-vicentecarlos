import { addCar } from "./actions";

const addProductThunk = (product) => (dispatch) => dispatch(addCar(product));

export default addProductThunk;
