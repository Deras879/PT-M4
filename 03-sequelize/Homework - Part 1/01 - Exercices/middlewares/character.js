const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
    const {code, mana, race, age, hp, name} = req.body;

    try {
    if(!code || !mana || !hp || !name){
        return res.status(404).send("Falta enviar datos obligatorios")
    }else {
        const newCharacter = await Character.create({code, mana, race, age, hp, name})
        if(!newCharacter){
            return res.status(404).send("Error en alguno de los datos provistos")
        }
        res.status(201).json(newCharacter);
    }
    } catch (error) {
        res.status(404).send("Error en alguno de los datos provistos")
    }
})



router.get("/", async (req,res) => {



    try {
        const {race, age} = req.query;
        const isRace = race !== undefined;
        const isAge = age !== undefined;
        switch (true) {
         case !isRace && !isAge:
             const characters = await Character.findAll();
             res.status(200).json(characters)
             break;
         case !isRace && isAge:
             const charactersAge = await Character.findAll({
                 where: {
                     age
                 }
             })
             res.status(200).json(charactersAge);
         break;
     
         case isRace && !isAge:
             const charactersRace = await Character.findAll({
                 where: {
                     race
                 }
             })
             res.status(200).json(charactersRace);
         break;
         default:
             const charactersAgeAndRace = await Character.findAll({
                 where:{
                    age,
                    race
                 }
             });
     
             res.status(200).json(charactersAgeAndRace);
             break;
        }
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});


router.get("/:code", async (req, res) => {
    const {code} = req.params
    try {
        const character = await Character.findByPk(code)
        if(!character){
            throw new Error(`El código ${code} no corresponde a un personaje existente`)
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(404).send(`El código ${code} no corresponde a un personaje existente`);
    }
})



router.put("/:attribute", async (req, res) => {
    const {attribute} = req.params;
    const {value} = req.query;
    if(!attribute || !value){
        res.status(400).json({error: "No se entregaron datos necesarios"});
    }
    try {
        const validAtributtes = ["name", "code", "mana", "hp", "age", "race"]
        if(!validAtributtes.includes(attribute)){
            throw new Error("Los personajes no cuentan con el atributo recibido.")
        };
        
        const condicionUpdate = {};
        condicionUpdate[attribute] = null;
        await Character.update({[attribute]:value}, {where: condicionUpdate});

        res.status(200).send("Personajes actualizados")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router;
