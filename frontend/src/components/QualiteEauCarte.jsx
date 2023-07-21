import { NavLink } from "react-router-dom";

function QualiteEauCarte
({code_commune,nom_commune,conformite_limites_pc_prelevement, image, id }){




    
    return (

        <li className="qualiteEauCarte">

            <NavLink to={`/ville/${id}`}>
<img src={image}/>
 <p>  {nom_commune} </p>
<p> Code Commune : {code_commune} </p>
<p> Conformite_limites_pc_prelevement: {conformite_limites_pc_prelevement} </p>


            </NavLink>

        </li>
    )
}

export default QualiteEauCarte;