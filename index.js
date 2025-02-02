function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+"
    } else if (score >= 80 && score < 90) {
        return "A"
    } else if (score >= 70 && score < 80) {
        return "B+"
    } else if (score >= 60 && score < 70) {
        return "B"
    } else {
        return "F"
    }
}

function displayResult(name, score) {
    let grade = calculateGrade(score)
    console.log("Student:"+name)
    console.log("Score:"+score)
    console.log("Grade:"+grade)
}

// Display result for Athira K with a score of 85
displayResult("Athira K", 85)
