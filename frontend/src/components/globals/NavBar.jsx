import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar">


          
            <h1>Qualité de l'eau potable </h1>
 
<ul>
    <NavLink to="/" >
    <li>Accueil</li>
    </NavLink>

    <NavLink to="/ajout" >
    <li>Ajouter</li>
    </NavLink>

    
</ul>
        </nav>
    )
}

export default NavBar;