
const calcButton = document.getElementById("calculate-budget");

let tip1 = "Always set aside a portion of your income for savings before spending on other expenses. A common rule is to save at least 20% of your income.";
let tip2 = "Use apps or tools to track where your money goes each month. Awareness is the first step to controlling your budget.";
let tip3 = "Follow the “30-day rule”: wait 30 days before making a significant purchase to ensure it’s necessary.";
let tip4 = "Aim to save 3-6 months’ worth of living expenses in a separate account for unexpected events.";
let tip5 = "Set up automatic transfers to your savings and bill payments to ensure you save consistently and avoid late fees.";



calcButton.onclick = function() {
    const monthlyIncome = Number(document.getElementById("monthly-income").value);

    const rentCost = Number(document.getElementById("rent").value);
    const foodCost = Number(document.getElementById("food").value);
    const utilitiesCost = Number(document.getElementById("utilities").value);
    const otherCost = Number(document.getElementById("other-costs").value);

    const totalCost = rentCost + foodCost + utilitiesCost + otherCost;
    const remaining = monthlyIncome - totalCost;

    const rentPercentage = (rentCost / monthlyIncome) * 100;
    const foodPercentage = (foodCost / monthlyIncome) * 100;
    const utilitiesPercentage = (utilitiesCost / monthlyIncome) * 100;
    const otherPercentage = (otherCost / monthlyIncome) * 100;

    document.getElementById("total-income").textContent = `$${monthlyIncome}`;
    document.getElementById("total-expenses").textContent = `$${totalCost}`;
    document.getElementById("total-leftover").textContent = monthlyIncome > totalCost ? `$${remaining}` : `You are $${Math.abs(remaining)} in DEBT!`;
    document.getElementById("rent-display").textContent = `$${rentCost}`;
    document.getElementById("food-display").textContent = `$${foodCost}`;
    document.getElementById("utilities-display").textContent = `$${utilitiesCost}`;
    document.getElementById("other-display").textContent = `$${otherCost}`;

    if (rentPercentage > 30) {
        document.getElementById("rent-display").style.color = "red";
        alert("Warning: Rent exceeds 30% of your income!");
    }
    
    if (foodPercentage > 30) {
        document.getElementById("food-display").style.color = "red";
        alert("Warning: Food expenses exceed 30% of your income!");
    }
    
    if (utilitiesPercentage > 30) {
        document.getElementById("utilities-display").style.color = "red";
        alert("Warning: Utilities exceed 30% of your income!");
    }
    
    if (otherPercentage > 30) {
        document.getElementById("other-display").style.color = "red";
        alert("Warning: Other expenses exceed 30% of your income!");
    }

    let insightText = "";
    if (remaining <= 0){
        insightText = "Critical Overspending! I've highlighted in red those categories where you spend more than 30% of your income, take a look at those.";
    }
    else if (remaining <= monthlyIncome * 0.25) {
        insightText = "Caution: Tight Budget!";
    }
    else {
        insightText = "Good Job: You're on track!";
    }

    document.getElementById("insights-bob").textContent = insightText;

    let num = Math.floor(Math.random()*5)+1;
    let tipToDisplay ;

    switch(num){
        case 1:
            tipToDisplay = tip1;
        case 2:
            tipToDisplay = tip2;
        case 3:
            tipToDisplay = tip3;
        case 4:
            tipToDisplay = tip4;
        case 5:
            tipToDisplay = tip5;
    }

    document.getElementById("tip").textContent = tipToDisplay;

    

}