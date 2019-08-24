class Activity {
  constructor(userActivityInformation) {
    this.userActivityInformation = userActivityInformation;
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
        return true
      } else {
        return false
      }
    };

    getDaysOverStepGoal() {
      let stepGoal = this.userActivityInformation.filter(activeObj => {
        if(activeObj.numSteps > 10000) {
          return activeObj.date
        }
      })
      return stepGoal.map(activeObj => activeObj.date)
    }


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}