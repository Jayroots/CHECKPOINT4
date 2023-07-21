import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

function ModifierVille() {

const [isDataSended, setIsDataSended] = useState(false);

const navigate = useNavigate();


const [formData,setFormData] = useState ({
    code_commune: "", 
    nom_commune: "", 
    conformite_limites_pc_prelevement:"", 
    image:""
    
})

const {id} = useParams();

useEffect(() =>{
    fetch(`http://localhost:5002/villes/${id}`)
        .then((response) => response.json())
        .then((res) => {
            setFormData({
                code_commune: res.code_commune, 
                nom_commune: res.nom_commune, 
                conformite_limites_pc_prelevement: res.conformite_limites_pc_prelevement, 
                image: res.image

            });
        })
        .catch((err) =>
        console.error(
            "Une erreur est survenue dans la récupération des données",
          err
        ))
}, [id])

const handleChange = (e) => {
    setFormData((previousValue) => ({
        ...previousValue, [e.target.name]:e.target.value
    }))
};

const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5002/villes/${id}`,{
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    })
    .then(() => {
        console.log("Modification Reussie")

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
                <li className="ajoutVilleTitre" > 
                <h2>Modifier une ville</h2>
                </li>

                <li className="ajoutVilleForm" >
                <form >

                    <input 
                    name="code_commune" 
                    placeholder="Code Commune"
                    onChange={(e) => handleChange(e)}
                    value={formData.code_commune}
                    />

                    <input
                    name="nom_commune" 
                    placeholder="Nom de la commune"
                    onChange={(e) => handleChange(e)}
                    value={formData.nom_commune}
                    />

                    <input 
                    name="conformite_limites_pc_prelevement"
                    placeholder="Resultat de la conformité du prelevement"
                    onChange={(e) => handleChange(e)}
                    value={formData.conformite_limites_pc_prelevement}
                    />

                    <input 
                    name="image" 
                    placeholder="Url de l'image"
                    onChange={(e) => handleChange(e)}
                    value={formData.image}
                    />

                    <button type="submit" onClick={handleSubmit}> Mettre à jour </button>

                </form>
                </li>

        </>
}

{isDataSended &&


   <li className="ajoutVilleMessageSuccess">
   <div className="progress-bar" ></div>
   <p>La ville a bien été modifiée</p>
</li>

}
             
        </ul>
    );
  }

export default ModifierVille;