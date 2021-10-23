// ### BMI Calculator with pounds, feet and inches
const BMICalculator = (weight, feet, inches) => {
    const BMI = 703 * (weight / (feet * 12 + inches) ** 2);
    const BMIRounded = Math.round(BMI * 10) / 10;
    console.log(BMIRounded);
};

BMICalculator(154, 5, 5);