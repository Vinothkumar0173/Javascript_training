let age = prompt("Enter your age:");
let height = prompt("Enter your height:");
let weight = prompt("Enter your weight:");

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60 kg");
        }
    } else {
        console.log("You are not selected because your height is below 160 cm");
    }
} else {
    console.log("You are not selected because your age is below 18");
}