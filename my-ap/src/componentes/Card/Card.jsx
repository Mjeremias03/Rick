import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { useState, useEffect } from 'react'
import { removeFav, addFav } from '../../redux/action'
const Card = ({name,origin,status,gender, species,image,onClose,id,addFav, removeFav,favoritos }) =>{
    const  [isFav, setFav] = useState(false)

    useEffect(() => {
        favoritos.forEach((fav) => {
           if (fav.id === id) {
              setFav(true);
           }
        });
     }, [favoritos]);
     
    const handleFavorite =(id) =>{
    if(isFav){
    setFav(false) 
    removeFav(id)
    }       
    else {
    setFav(true)
    addFav({name,origin,status,gender, species,image,onClose,id})
    }
}
    
    return(
        <div className={style.contenedor}>
            <h1><img src={image} alt="Rick" /></h1>
            <div className={style.palabras}>
            <h1>{id}</h1>
            <Link to= {`/detail/${id}`}>
            <h1>{name}</h1>
            </Link>
        
        <button onClick={handleFavorite}>{isFav? "❤️" : "🤍"}</button>
            
            <h1>{origin.name}</h1>
            <h1>{status}</h1>
            <h1>{gender}</h1>
            <h1>{species}</h1>
            <button onClick = {()=> onClose(id)}>X</button>
            </div>
        </div>
    )}
    
    const mapDispatchToProps = (dispatch) =>{
        return {removeFav:(id) =>{ dispatch(removeFav(id))},
                addFav: (personaje) =>{ dispatch(addFav(personaje))}
                }}

    const mapStateToProps = (state) =>{
        return{favoritos: state.myFavorites}
    }

    export default connect(mapStateToProps,mapDispatchToProps)(Card) 
