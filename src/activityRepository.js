class ActivityRepository {
  constructor(activityInformation) {
    this.activityInformation = activityInformation;
    this.user;
  }

  getUserById(userID) {
    this.user = this.activityInformation.filter(user => user.userID === userID);
    return this.user;    
  }

  getAverageStairsClimbedByDayAllUsers(date) {
    let flightsDate = this.activityInformation.filter(activeObj => activeObj.date === date );
    let userTotalStairs = flightsDate.reduce((flights, user) => {
      flights += user.flightsOfStairs
        return flights
    }, 0)
    let averageFlights = Number((userTotalStairs / 7).toFixed(2));
      return averageFlights
  }

  getAverageStepsTakenByDayAllUsers(date) {
    let stepsDate = this.activityInformation.filter(activeObj => activeObj.date === date);
    let userTotalSteps = stepsDate.reduce((steps, user) => {
      steps += user.numSteps
        return steps
    }, 0)  
    let averageSteps = Number((userTotalSteps / 7).toFixed(2));
      return averageSteps
  }

  getAverageMinutesActiveByDayAllUsers(date) {
    let minutesDate = this.activityInformation.filter(activeObj => activeObj.date === date);
    let userMinutesTotal = minutesDate.reduce((minutes, user) => {
      minutes += user.minutesActive
        return minutes
    }, 0)
    let averageMinutesActive = Number((userMinutesTotal / 7).toFixed(2));
      return averageMinutesActive
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}