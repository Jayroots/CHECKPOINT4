const database = require("../datasource.js");

const findAll = async () => {

    return await database.query("SELECT * FROM qualite_eau_ville");
}




const findById = async (id) => {

    return await database.query("SELECT * FROM qualite_eau_ville WHERE id = ?", [id]);

}



const insertCity = async (code_commune, nom_commune, conformite_limites_pc_prelevement, image) => {
    
    return await database.query(
        "INSERT INTO qualite_eau_ville (code_commune, nom_commune, conformite_limites_pc_prelevement, image) VALUES (?, ?, ?, ?)",
        [code_commune, nom_commune, conformite_limites_pc_prelevement, image]
    )
}


const updateCity = async (code_commune, nom_commune, conformite_limites_pc_prelevement, image, id) => {

    return await database.query(
        "UPDATE qualite_eau_ville SET code_commune = ?, nom_commune = ?, conformite_limites_pc_prelevement = ?, image = ? WHERE id = ?",
        [code_commune, nom_commune, conformite_limites_pc_prelevement, image, id]
    )
}

const deleteCity = async (id) => {
    return await database.query("DELETE FROM qualite_eau_ville WHERE id = ?", [id])
}



module.exports = {
    findAll,
    findById,
    insertCity,
    updateCity,
    deleteCity
}