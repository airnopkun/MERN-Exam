const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of pet is required"],
        minlength: [3, "Name of pet must be at least 3 characters long"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Type of pet is required"],
        minlength: [3, "Type of pet must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 3 characters long"]
    },
    skills: {
        type: [String],
        required: [false],
        validate: [arrayLimit, 'Pet can have at most 3 skills']
    }
}, { timestamps: true });

function arrayLimit(val) {
    return val.length <=3;
}

PetSchema.plugin(uniqueValidator, { message: 'Pet with name "{VALUE}" already exists'});
module.exports.Pet = mongoose.model('Pet', PetSchema);