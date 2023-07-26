// First Problem
// mindGame

// 10*3+10/2-5

function mindGame(input) {
    // Multiply by 3
    let result = input * 3;
    // Add 10
    let result1 = result + 10;
    // Divide by 2
    let result2 = result1 / 2;
    // Minus 5
    let result3 = result2 - 5;
    return result3;
}

let inputNumber = 10;
let outputResult = mindGame(inputNumber);
console.log(outputResult);


// evenOdd
function evenOdd(inputString) {
    // Calculate the length of the input string
    const length = inputString.length;

    // Check if the length is odd or even
    if (length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let str = "Hello";
let result = evenOdd(str);
console.log(result);

// Third Problem
// isLGSeven
// inputNumber - 7
function isLGSeven(inputNumber) {
    if (inputNumber - 7 < 7) {
        let result = inputNumber - 7;
        return result;
        // console.log('Output is 7');
    }
    else {
        let result2 = inputNumber * 2;
        return result2;
    }
}

let number = 14;
let result7 = isLGSeven(number);
console.log(result7);

// Fourth Problem
// findingBadData

function findingBadData(inputArray) {
    const negativeNumbers = inputArray.filter((num) => num < 0);
    return negativeNumbers
}

let numbers = [1, -2, 3, -4, 5, -6];
let negativeResult = findingBadData(numbers);
console.log(negativeResult);

// Fifth Problem
// gemsToDiamond
// 21, 32, 43
function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
    const friend1Sum = 21 * friend1Gems;
    const friend2Sum = 32 * friend2Gems;
    const friend3Sum = 43 * friend3Gems;
    const totalSum = friend1Sum + friend2Sum + friend3Sum;
    if (totalSum > 1000 * 2) {
        return totalSum - 2000;
    } else {
        return totalSum;
    }
}

let friend1Gems = 1;
let friend2Gems = 2;
let friend3Gems = 3;

let gemsResult = gemsToDiamond(friend1Gems, friend2Gems, friend3Gems);
console.log(gemsResult);
