const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: Array, required: true },
    correctAnswer: { type: String, required: true },
    category: { type: String },
    difficulty: { type: String },

});

module.exports = mongoose.model('Question', questionSchema);

// enum: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'], required: true

// enum: ['Easy', 'Medium', 'Hard'],  required: true 