import { useEffect, useState} from "react";
import QualiteEauCarte from "../QualiteEauCarte";


function HomePage() {

    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue]= useState("...");

    useEffect(()=> {
        fetch("http://localhost:5002/villes")
        .then((response)=> response.json())
        .then((res) => setData(res))
        .catch((err) => console.error(err))

    }, [])





   

    function handleChange(e) {
setSelectedValue(e.target.value)

    }







return (
        <main className="homePage">
  
            <select onChange={handleChange}>

<option> ... </option>
{
   data && data.map((el) => {

return (
<option key={el.id} > {el.nom_commune} </option>
)
    })
}
            </select>


            <ul>
                {data && data
                .filter((el) => selectedValue === "..." || selectedValue === el.nom_commune)
                .map((el) => {
                    return (
                        <QualiteEauCarte 
                        key={el.id} 
                        id={el.id}
                        image={el.image}
                        code_commune={el.code_commune} 
                        nom_commune={el.nom_commune}
                        conformite_limites_pc_prelevement={el.conformite_limites_pc_prelevement}
                        />
                    )
                })}

            </ul>

        </main>
    )
}

export default HomePage;