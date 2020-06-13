import * as actionTypes from './Actions'

const initialState ={
    ingredients:null,
    totalPrice:4,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
