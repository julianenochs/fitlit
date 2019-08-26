class Activity {
  constructor(userActivityInformation, user) {
    this.userActivityInformation = userActivityInformation;
    this.strideLength = user.strideLength;
    this.averageMinutesActivePerWeek;
  }

  getMinutesActivePerDayByDate(date) {
    let minutesPerDay = this.userActivityInformation.find(activeObj => activeObj.date === date) 
      return minutesPerDay.minutesActive  
  };

  getAverageMinutesActivePerWeek() {
    let totalMinutes = this.userActivityInformation.reduce((minActive, activeObj) => {
      minActive += activeObj.minutesActive
        return minActive
    }, 0);
    this.averageMinutesActivePerWeek = Number ((totalMinutes / this.userActivityInformation.length).toFixed(2))
      return this.averageMinutesActivePerWeek
  };

  getStepGoalByDay(date) {
    let stepGoalDate = this.userActivityInformation.find(activeObj => activeObj.date === date)
    let numOfSteps = stepGoalDate.numSteps
      if (numOfSteps > 10000) {
        return "You reached your step goal"
      } else {
        return "Did not meet step goal"
      }
    };

  getDaysOverStepGoal() {
    let stepGoal = this.userActivityInformation.filter(activeObj => {
      if(activeObj.numSteps > 10000) {
        return activeObj.date
      }
    })
    return stepGoal.map(activeObj => activeObj.date)
  };

  getStepsPerDay(date) {
    let stepsPerDayDate = this.userActivityInformation.find(activeObj => activeObj.date === date)
      return stepsPerDayDate.numSteps
  };

  getDistanceBasedOnStepCountAndDay(date) {
    let stepsPerDayDate = this.userActivityInformation.find(activeObj => activeObj.date === date)
      return Number((stepsPerDayDate.numSteps * this.strideLength / 5280).toFixed(2))
  };

  getStairFlightRecord() {
    let stairFlightsPerDay = this.userActivityInformation.map(activeObj => {
      return activeObj.flightsOfStairs
    });
    let stairRecord = Math.max.apply(null, stairFlightsPerDay)
      return stairRecord
  }

  getStairFlightsByDay(date) {
    let stairFlightsDate = this.userActivityInformation.find(activeObj => activeObj.date === date)
      return stairFlightsDate.flightsOfStairs
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}