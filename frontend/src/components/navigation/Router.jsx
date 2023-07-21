
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
/* import QualiteEauDetails from '../QualiteEauDetails'; */
import AjoutVille from '../pages/AjoutVille';
import ModifierVille from '../pages/ModifierVille'


const Router = () => {
    return (

        <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/ajout" element={<AjoutVille/>} />
               {/*  <Route path="/ville/:id" element={<QualiteEauDetails/>} /> */}
               <Route path="/modifier/:id" element={<ModifierVille/>} />


        </Routes>
    );
};

export default Router;