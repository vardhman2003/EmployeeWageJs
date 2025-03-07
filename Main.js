const {
    generateEmployeeWageData,
    calcTotalWage,
    getDayWithWage,
    getFullTimeDays,
    findFirstFullTimeDay,
    isAllFullTimeWageCorrect,
    hasPartTimeWage,
    countDaysWorked
} = require('./employeWage');

//Generate Employee Wage Data
const wageData = generateEmployeeWageData();

//Perform operations
console.log("1. Total Employee Wage:", calcTotalWage(wageData));
console.log("2. Day-wise Wage:", getDayWithWage(wageData));
console.log("3. Days with Full-time Wage:", getFullTimeDays(wageData));
console.log("4. First Full-time Wage Day:", findFirstFullTimeDay(wageData));
console.log("5. Is Every Full-time Wage Correct?", isAllFullTimeWageCorrect(wageData));
console.log("6. Is There Any Part-time Wage?", hasPartTimeWage(wageData));
console.log("7. Total Days Worked:", countDaysWorked(wageData));
