import style from '../Search/Search.module.css'
import { useState } from 'react'
const Search = ({onSearch}) =>{
    const[ id ,Setid]= useState("");
    const handleChange = (event) =>{
        Setid(event.target.value)
    }
    return(
        <div  className={style.contenedor}>
            <input onChange={handleChange} value={id} type="search" />
            <button onClick={()=>{onSearch(id); Setid('')}}>Agregar</button>
        </div>
    )
}
export default Search