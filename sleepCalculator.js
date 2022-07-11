
// This progam calculates sleep debt

// Function to determine how many hours of sleep you got each night of the week
const getSleepHours = day => {
  if (day === 'monday') {
    return 7
  } else if (day === 'tuesday') {
    return 6
  } else if (day === 'wednesday') {
    return 8
  } else if (day === 'thursday') {
    return 6
  } else if (day === 'friday') {
    return 7
  } else if (day === 'saturday') {
    return 8
  } else if (day === 'sunday') {
    return 7
  }
}   

// Function to get the total sleep hours that you actually slept
const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

// Function to get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  let idealHours = 8 
  return idealHours*7
};


// Function to get the sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('user got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week');
  } else if(actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week');
  }
} 

// Calling the function to run the program
calculateSleepDebt()