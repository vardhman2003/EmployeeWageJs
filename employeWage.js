const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//Function to calculate daily wage
const calcDailyWage = (hoursWorked) => hoursWorked * WAGE_PER_HOUR;

//Function to generate employee wage data
const generateEmployeeWageData = () => {
    let empDailyHours = [8, 4, 8, 0, 8, 4, 8, 8, 4, 0]; // Hours worked per day
    let empDailyWage = empDailyHours.map(hours => calcDailyWage(hours));
    
    return empDailyWage.map((wage, index) => ({
        day: index + 1,
        hoursWorked: empDailyHours[index],
        dailyWage: wage
    }));
};

const calcTotalWage = (wageData) => wageData.reduce((total, day) => total + day.dailyWage, 0);

//Function to get days along with daily wage
const getDayWithWage = (wageData) => wageData.map(day => `Day ${day.day}: Wage ${day.dailyWage}`);

//Function to get days with full-time wage
const getFullTimeDays = (wageData) => wageData.filter(day => day.dailyWage === 160).map(day => `Day ${day.day}`);

//Function to find first occurrence of full-time wage
const findFirstFullTimeDay = (wageData) => wageData.find(day => day.dailyWage === 160);

//Function to check if every full-time wage day has correct wage
const isAllFullTimeWageCorrect = (wageData) => wageData.every(day => day.hoursWorked === FULL_TIME_HOURS || day.hoursWorked === 0);

// Function to check if there is any part-time wage
const hasPartTimeWage = (wageData) => wageData.some(day => day.dailyWage === (PART_TIME_HOURS * WAGE_PER_HOUR));

// Function to count days worked
const countDaysWorked = (wageData) => wageData.filter(day => day.hoursWorked > 0).length;

//Export functions
module.exports = {
    generateEmployeeWageData,
    calcTotalWage,
    getDayWithWage,
    getFullTimeDays,
    findFirstFullTimeDay,
    isAllFullTimeWageCorrect,
    hasPartTimeWage,
    countDaysWorked
};
