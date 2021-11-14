// ### BMI Calculator with pounds, feet and inches
const BMICalculator = (weight, feet, inches) => {
    const BMI = 703 * (weight / (feet * 12 + inches) ** 2);
    const BMIRounded = Math.round(BMI * 10) / 10;
    console.log(BMIRounded);
};

BMICalculator(154, 5, 5);

N = 34;
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => N * e).join(" "));

/* ------------------------------------------------------------------------------ */

// ### Boys & Girls Groups Challenge
function maxGroup(x, y) {
    let maxNum = 0;
    x > y ? (maxNum = x) : (maxNum = y);

    // if (x > y) {
    //     maxNum = x;
    // } else {
    //     maxNum = y;
    // }

    const num = [];

    for (let i = 0; i < maxNum; i++) {
        if (x % i === 0 && y % i === 0) num.push(i);
    }
    const lastNum = num.slice(-1).pop();
    console.log(lastNum);
    console.log(x / lastNum, y / lastNum);
}

maxGroup(15, 5);

/* ------------------------------------------------------------------------------ */

// ### Reverse String

const reverseString = (string) => {
    let reverseStr = string.split("").reverse().join("");

    for (let i = 0; i < string.length; i++) {
        console.log(`${string[i]} ${reverseStr[i]}`);
    }
};

reverseString("Hello world");