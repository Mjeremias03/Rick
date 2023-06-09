import Search from "../Search/Search"
import style from '../Navabr/Navbar.module.css'
import { Link } from "react-router-dom"
const Nav = ({onSearch}) =>{
    return(
        <div className={style.nav}>
        <Search onSearch={onSearch}/>
       <button>  <Link to= '/about'> About</Link></button>
        <button>  <Link to='/home'> HOME</Link></button>
        <button><Link to='/favoritos'> Favorites</Link> </button>
        </div>
    )
}
export default Nav