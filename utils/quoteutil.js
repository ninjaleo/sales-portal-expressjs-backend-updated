const calculatedQuoteInfo = (quoteInfo, interestRate) => {
    console.log(quoteInfo);
    const { tenure, loanAmount,userEmail,annualIncome } = quoteInfo;
    console.log("details:"+tenure)
    interest = interestRate / (12 * 100);
    period = tenure * 12;
    var emi;
    var totalAmountPayabale;
    var totalInterestPayable;
    emi = (loanAmount * interest * Math.pow(1 + interest, period)) / (Math.pow(1 + interest, period) - 1);
    totalAmountPayabale = emi * period;
    totalInterestPayable = totalAmountPayabale - loanAmount;
    const result = {
        "userEmail": userEmail,
        "annualIncome": annualIncome,
        "principal": loanAmount,
        "interestRate": interestRate,
        "tenure": tenure,
        "monthlyEMI": emi,
        "totalAmountPayable": totalAmountPayabale,
        "totalInterest": totalInterestPayable
    };
    console.log("Formated quote Info is:" + JSON.stringify(result));
    return result;
}


module.exports = {
    calculatedQuoteInfo
}