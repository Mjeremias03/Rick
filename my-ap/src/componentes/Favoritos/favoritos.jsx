import { connect } from "react-redux";
import Card from "../Card/Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCards, filter } from "../../redux/action";
const Favoritos = ({ favoritos }) => {

const [aux, setAux] = useState(false);
const dispatch = useDispatch()

  const handleOrder = (event) =>{
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }
  const handleFilter = (event) =>{
    dispatch(filter(event.target.value))
  }
  return (
    <div>
<select onChange={handleOrder}>
  <option value="A">Ascendente</option>
  <option value="D">Descendente</option>
</select>
<select onChange={handleFilter}>
<option value="Male"> Male</option>
<option value="Female">Female</option>
<option value="Genderless">Genderless</option>
<option value="unknown">unknown</option>

</select>

  
  
    <div>
      {favoritos.map((personaje) => {
        return (
          <Card
            name={personaje.name}
            id={personaje.id}
            species={personaje.species}
            image={personaje.image}
          />
        );
      })}
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { favoritos: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favoritos);


