import { NavLink } from "react-router-dom";


function QualiteEauCarte
({code_commune,nom_commune,conformite_limites_pc_prelevement, image, id, onDelete }){

const handleDelete = () => {

onDelete();

};


    return (

        <li className="qualiteEauCarte">
        <img src={image} alt="Image de la commune" />
        <p>{nom_commune}</p>
        <p>Code Commune : {code_commune}</p>
        <p>Conformite_limites_pc_prelevement: {conformite_limites_pc_prelevement}</p>





        <NavLink to={`/modifier/${id}`}>
        <button>
            Modifier
        </button>
            </NavLink> 
<br />
<br />

        <button className="suppr-button" type="button" onClick={handleDelete}>
          Supprimer
        </button>
      </li>
    );
  }
export default QualiteEauCarte;