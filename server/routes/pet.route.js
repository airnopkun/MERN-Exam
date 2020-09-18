const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api/pets', PetController.index);
    app.get('/api/pets/:id', PetController.getPet);
    app.post('/api/pets/new', PetController.createPet);
    app.put('/api/pets/:id', PetController.editPet);
    app.delete('/api/pets/:id', PetController.deletePet);
}