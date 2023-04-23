const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: Array, required: true },
    correctAnswer: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },

});

module.exports = mongoose.model('Question', questionSchema);