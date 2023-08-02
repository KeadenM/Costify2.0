const { Schema, model } = require('mongoose');

const incomeSchema = new Schema({
    income: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

const Income = model('Income', incomeSchema);

module.exports = Income;