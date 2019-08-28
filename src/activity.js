class Activity {
  constructor(userActivityInformation, user) {
    this.userActivityInformation = userActivityInformation;
    this.strideLength = user.strideLength;
    this.averageMinutesActivePerWeek;
  }

  getMinutesActivePerDayByDate(id, date) {
    let user = this.userActivityInformation.filter(user => user.userID === id)
    let minutesPerDay = user.find(activeObj => activeObj.date === date) 
      return minutesPerDay.minutesActive  
  };

  getAverageMinutesActivePerWeek(date) {
    let index = this.userActivityInformation.find(activeObj => {
      return activeObj.date === date
    });
    let totalMinutes = this.userActivityInformation.splice(index - 6).reduce((minActive, activeObj) => {
      minActive += activeObj.minutesActive
        return minActive
    }, 0);
    let averageMinutes = Number ((totalMinutes / 7).toFixed(2))
      return averageMinutes
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
    });
    return stepGoal.map(activeObj => activeObj.date)
  };

  getStepsPerDay(id, date) {
    let user = this.userActivityInformation.filter(user => user.userID === id)
    let stepsPerDayDate = user.find(activeObj => activeObj.date === date)
      return stepsPerDayDate.numSteps
  };

  getDistanceBasedOnStepCountAndDay(id, date) {
    let person = this.userActivityInformation.filter(user => user.userID === id)
    let stepsPerDayDate = person.find(activeObj => activeObj.date === date)
      return Number((stepsPerDayDate.numSteps * this.strideLength / 5280).toFixed(2))
  };

  getStairFlightRecord() {
    let stairFlightsPerDay = this.userActivityInformation.map(activeObj => {
      return activeObj.flightsOfStairs
    });
    let stairRecord = Math.max.apply(null, stairFlightsPerDay)
      return stairRecord
  };

  getStairFlightsByDay(id, date) {
    let user = this.userActivityInformation.filter(user => user.userID === id)
    let stairFlightsDate = user.find(activeObj => activeObj.date === date)
      return stairFlightsDate.flightsOfStairs
  };

  getWeeklyStepCount(id, date) {
    let user = this.userActivityInformation.filter(user => user.userID === id)
    let firstDayIndex = user.indexOf(el => el.date === date)
    let week = user.splice(firstDayIndex - 6)
    return week.map(user => user.numSteps)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}