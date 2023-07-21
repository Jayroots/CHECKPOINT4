import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QualiteEauDetails = () => {

    const [data, setData] = useState(undefined);

    const {id} = useParams();

    useEffect(() => {

        fetch(`http://localhost:5002/villes/${id}`)
        .then((response)=> response.json())
        .then((res) => setData(res))
        .catch((err) => console.error(err))

    }, [])


    return (
       
<ul className="qualiteEauCarteDetails">

{ data !== undefined &&

    <li className="qualiteEauCarte">


        <p>  {data.nom_commune} </p>
        <p> Code Commune : {data.code_commune} </p>
        <p> Conformite_limites_pc_prelevement: {data.conformite_limites_pc_prelevement} </p>


    </li>

}

</ul>


    );
};

export default QualiteEauDetails;