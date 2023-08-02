const { Schema, model } = require('mongoose');

const expenseSchema = new Schema({
    expense: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = expenseSchema;
