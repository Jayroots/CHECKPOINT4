import { useState } from "react";
import {useNavigate} from "react-router-dom";

function AjoutVille() {

const [isDataSended, setIsDataSended] = useState(false);

const navigate = useNavigate();


const [formData,setFormData] = useState ({
    code_commune: "", 
    nom_commune: "", 
    conformite_limites_pc_prelevement:"", 
    image:""
    
})

const handleChange = (e) => {
    setFormData((previousValue) => ({
        ...previousValue, [e.target.name]:e.target.value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5002/villes",{
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(() => {
        console.log("Insertion Reussie")

        setIsDataSended(true);
        
        setTimeout(()=> {
                navigate("/")

        }, 3000)
    })
    .catch((err) => {
        console.error(err)
    })
}




    return (
        <ul className="ajoutVille">


                    
                

{!isDataSended &&

        <>
                <li className="ajouVilleTitre" > 
                <h2>Ajouter une ville</h2>
                </li>

                <li className="ajoutVilleForm" >
                <form >

                    <input 
                    name="code_commune" 
                    placeholder="Code Commune"
                    onChange={handleChange}
                    value={formData.code_commune}
                    />

                    <input
                    name="nom_commune" 
                    placeholder="Nom de la commune"
                    onChange={handleChange}
                    value={formData.nom_commune}
                    />

                    <input 
                    name="conformite_limites_pc_prelevement"
                    placeholder="Resultat de la conformité du prelevement"
                    onChange={handleChange}
                    value={formData.conformite_limites_pc_prelevement}
                    />

                    <input 
                    name="image" 
                    placeholder="Url de l'image"
                    onChange={handleChange}
                    value={formData.image}
                    />

                    <button type="submit" onClick={handleSubmit}> Envoyer </button>

                </form>
                </li>

        </>
}

{isDataSended &&


   <li className="ajoutVilleMessageSuccess">
   <div className="progress-bar" ></div>
   <p>Ville Créée</p>
</li>

}
             
        </ul>
    );
  }

export default AjoutVille;