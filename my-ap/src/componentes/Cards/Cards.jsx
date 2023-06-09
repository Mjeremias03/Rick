import Card from "../Card/Card"
import style from '../Cards/Cards.module.css'
const Cards = ({characters, onClose}) =>{
   return(
   
        <div className={style.cartas}>
            {
                characters.map((personaje) => {
                    return(
                        <Card
                        key={personaje.id}
                        id={personaje.id}
                        name = {personaje.name}
                        origin={personaje.origin.name}
                        status={personaje.status}
                        gender={personaje.gender}
                        species={personaje.species}
                        image={personaje.image}
                        onClose={onClose}
                        fav = {personaje.favoritos}
                        />
                    )
        
   }) 
          
            }
        </div>
   )
}
export default Cards