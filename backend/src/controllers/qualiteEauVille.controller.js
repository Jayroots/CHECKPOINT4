const {findAll, findById, insertCity, updateCity, deleteCity} = require("../models/qualiteEauVille.model");




const getAllVilles = (req, res) => {
    findAll()
    .then(([result]) => {
        res.status(200).send(result)
    })

    .catch((err) => {
        console.error("An error occured while retrieving data", err)
    })
}




const getVilleById = (req, res) => {

    const id = req.params.id;

    findById(id)
    .then(([result]) => {
        if (result.length){
            res.status(200).send(result)
        } else {
            res.status(404).send(`La ville avec l'id ${id} n'existe probablement pas`)
        }
    })

    .catch((err) => {
        console.error("An error occured while retrieving data by id", err)
    })
}


const createVille = (req,res) => {
    const {code_commune, nom_commune, conformite_limites_pc_prelevement, image} = req.body;

    insertCity(code_commune, nom_commune, conformite_limites_pc_prelevement, image)
        .then(([result]) => {
if (result.affectedRows){
    return res.status(201).send(`La ville avec le nom ${nom_commune} a bien été créé`)
}
    return res.status(404).send("An error occured while creating city")
        })
        .catch((err) => {
            console.error("Internal servor error", err.message)
        })
}


const editVille = (req,res) => {
    const id = req.params.id;
    const {code_commune, nom_commune, conformite_limites_pc_prelevement, image} = req.body;

    updateCity(code_commune, nom_commune, conformite_limites_pc_prelevement, image)
        .then(([result]) => {
if (result.affectedRows){
    return res.status(200).send(`la ville avec l'id ${id} a bien été modifiée`)
}
    return res.status(404).send("An error occured while modifing city")

        })

        .catch((err) => {
            console.error("Internal servor error", err.message)
        })

}


/* const eraseVille = (req, res) => {
    
const id = req.params.id;

      deleteCity(id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204).send("la ville a bien été supprimée");
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }; */

  const eraseVille = async (req, res) => {
    try {
        const id = req.params.id    // OU const {id}= req.params
        const [result] = await deleteCity(id)
        res.status(200).send(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Erreur serveur")

    }
}



module.exports = {
    getAllVilles,
    getVilleById,
    createVille,
    editVille,
    eraseVille
}