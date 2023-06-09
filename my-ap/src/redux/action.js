import {ADD_FAV, REMOVE_FAV, ORDER, FILTER} from './actiontype'
export const addFav = (personaje) =>{ 
    return {type:ADD_FAV, payload: personaje  }
}

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}
 
export const filter = (gender) =>{
    return {
        type: FILTER, payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER, payload: orden
    }
}