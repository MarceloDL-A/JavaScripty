let raceNumber = Math.floor(Math.random() * 1000);
const resteredEarly = false;
const age = 14;
if (resteredEarly && age > 18) {raceNumber += 1000};

if (resteredEarly && age > 18) {console.log(`You run at 9:30 am and your number is ${raceNumber}`)} else if (!resteredEarly && age > 18) {console.log(`You run at 11:00 am and your number is ${raceNumber}`)} else if (age < 18) {console.log(`You run at 12:30 am and your number is ${raceNumber}`)} else {console.log("You shall see the registration desk.")}