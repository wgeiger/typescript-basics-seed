// plugin hybrids are tough to calculate because of how their fuels fight each other
const daysInMonth = 30

let tankSize = 16
let pricePerFuelUnit = .07
let milesPerTank = 38
let averageDailyMiles = 22
let monthlyInsuranceCost = 120
let monthlyLoanPrice = 300

let yearlyMilesDriven = daysInMonth * 12 * averageDailyMiles
let milesPerUnit = milesPerTank / tankSize
let daysPerTank = Math.floor(milesPerTank/averageDailyMiles);
let unitsPerDay = averageDailyMiles / milesPerUnit
let pricePerDay: number

//TODO: what about if things aren't such small "tanks"
if(daysPerTank===1){
    pricePerDay = unitsPerDay * pricePerFuelUnit
}

let pricePerMonth = pricePerDay * daysInMonth;

let insuranceCostYear = monthlyInsuranceCost * 12
let fuelCostPerYear = pricePerMonth * 12;
let loanCostPerYear = monthlyLoanPrice * 12;

let carPricePerYear = fuelCostPerYear + insuranceCostYear+loanCostPerYear

console.log("Miles per unit: "+milesPerUnit)
console.log("days per tank: "+daysPerTank)
console.log("units per day: "+unitsPerDay)
console.log("Price Per day: $"+pricePerDay)
console.log("Price per month: $"+pricePerMonth)
console.log("Fuel cost per year: $"+fuelCostPerYear)
console.log("Loan pricing: $"+loanCostPerYear)
console.log("Price per year: $"+carPricePerYear)

