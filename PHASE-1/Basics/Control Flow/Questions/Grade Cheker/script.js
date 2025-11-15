// Questions

// Write a function getGrade(score) that:
// Takes a student's marks (0 to 100)
// Returns the grade based on this loogic:
// 90-100: A+
// 80-89: A
// 70-79: B
// 60-69: C
// 33-59: D
// 0-32: Fail
// Anything else : Invalid marks

function getGrade(score) {
    if(score >= 90 && score <= 100){
        return 'A+';
    }
    else if(score >= 80 && score <= 89){
        return 'A';
    }
    else if(score >= 70 && score <= 79){
        return 'B';
    }
    else if(score >= 60 && score <= 69){
        return 'C';
    }
    else if(score >= 33 && score <= 59){
        return 'D';
    }
    else if(score >= 0 && score <= 32){
        return 'Fail';
    }
    else{
        return 'Invalid marks';
    }
}

// Test cases
console.log(getGrade(95)); // A+
console.log(getGrade(85));
console.log(getGrade(75)); // B
console.log(getGrade(65)); // C
console.log(getGrade(50)); // D
console.log(getGrade(25)); // Fail
console.log(getGrade(110)); // Invalid marks