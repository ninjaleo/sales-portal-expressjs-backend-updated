const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const QuoteSchema = new mongoose.Schema({
  
  userEmail: String,
  annualIncome: Number,
  principal: Number,
  interestRate: Number,
  tenure: Number,
  monthlyEMI: Number,
  totalInterest: Number,
  totalAmountPayable: Number,
  createdDate:{ type: Date, default: Date.now }
});

QuoteSchema.plugin(AutoIncrement,{inc_field: 'quoteId'})
const Quote = mongoose.model("quote", QuoteSchema);

module.exports = { Quote}