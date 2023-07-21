const express = require("express");

const {getAllVilles, getVilleById, createVille, editVille, eraseVille} = require("../controllers/qualiteEauVille.controller.js");


const router = express.Router();

router.get("/", getAllVilles);
router.get("/:id", getVilleById);
router.post("/", createVille);
router.put("/:id", editVille);
router.delete("/:id",eraseVille);

module.exports = router;