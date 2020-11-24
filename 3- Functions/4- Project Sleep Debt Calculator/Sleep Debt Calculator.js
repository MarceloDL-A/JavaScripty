function getSleepHours(day){
  if(day === 'monday'){return 8}
  else if (day === 'tuesday'){return 6} 
  else if (day === 'wednesday'){return 9} 
  else if (day === 'thursday'){return 5} 
  else if (day === 'friday'){return 6} 
  else if (day === 'saturday'){return 7} 
  else if (day === 'sunday'){return 6} else {return console.log("You type a invalid data!")}
};

// console.log(getSleepHours('wednesday'))

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours = 8) => idealHours*7;

// console.log(getIdealSleepHours())
// console.log(getActualSleepHours())

const calculateSleepDebt = () => {actualSleepHours = getActualSleepHours();
idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours) {console.log("You got perfect amount of sleep!")} else if (actualSleepHours > idealSleepHours){console.log("You got " + (actualSleepHours - idealSleepHours) + " more sleep than needed!")} else {console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')}};

calculateSleepDebt()







