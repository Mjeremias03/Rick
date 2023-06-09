import { removeFav,addFav, orderCards, filter } from "./action";
const initialstate = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialstate, action) => {
switch(action.type){
  case addFav:
    return{
      ...state, 
      myFavorites: [...state.allCharacters, action.payload],
      allCharacters: [...state.allCharacters, action.payload] 
    }

  case removeFav:
    return{
      ...state,
       myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
    }
    case filter:
      return{
        ...state, 
       allCharacters: [...state.allCharacters.filter(personaje =>{
        if(personaje.gender === action.payload) return [...state.myFavorites, action.payload]
        else{
          return ''
        }
        })]
      }

      case orderCards:
        const ordenarallcharacter = [...state.allCharacters]
        return {
          ...state,
         myFavorites: 
              action.payload === "A"? ordenarallcharacter.sort((a,b)=>{
                 return a.id - b.id
              }): ordenarallcharacter.sort((a,b) => {
                 return b.id - a.id
              })
             
        }
default:
  return{
    ...state
  }
    
}

}

export default reducer;
