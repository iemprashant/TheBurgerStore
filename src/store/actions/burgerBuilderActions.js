import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient =(name)=>{
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName : name
    };
}
export const removeIngredient =(name)=>{
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName : name
    };
}
export const setIngredient=(ing)=>{
    return {
        type:actionTypes.SET_INGREDIENT,
        ingredients:ing
    };
}
export const initIngredient =()=>{
    return dispatch =>{
        axios.get('/ingredients.json')
        .then(response =>{
            dispatch(setIngredient(response.data),
            console.log(response.data))
        })
    }
}