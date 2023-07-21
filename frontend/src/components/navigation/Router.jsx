
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import QualiteEauDetails from '../QualiteEauDetails';
import AjoutVille from '../pages/AjoutVille';


const Router = () => {
    return (

        <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/ajout" element={<AjoutVille/>} />
                <Route path="/ville/:id" element={<QualiteEauDetails/>} />



        </Routes>
    );
};

export default Router;