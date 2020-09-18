const { Pet } = require('../models/pet.model')

module.exports = {
    index: (req, res) => {
        Pet.find()
            .then(allPets => res.json({ pets: allPets }))
            .catch(err => res.json({ message: "Something went wrong", error: err}))
    },

    getPet: (req, res) => {
        Pet.findOne({_id: req.params.id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err))
    },

    createPet: (req, res) => {
        const { name, type, description, skills } = req.body;
        Pet.create({
            name,
            type,
            description,
            skills
        })
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err));
    },

    editPet: (req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true, context: 'query'})
            .then(updatedPet => res.json(updatedPet))
            .catch(err => res.status(400).json(err))
    },

    deletePet: (req, res) => {
        Pet.findOneAndRemove({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }
}
