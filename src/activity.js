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

  getStepGoalByDay() {
    
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}