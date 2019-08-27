class Hydration {
  constructor(userHydrationInfo) {
    this.userHydrationInfo = userHydrationInfo;
    this.averageOuncesConsumed;
  }

  getAverageOuncesPerDayAllTime() {
    let totalOunces = this.userHydrationInfo.reduce((ounces, hydrationObj) => {
      ounces += hydrationObj.numOunces
      return ounces
    }, 0)
    this.averageOuncesConsumed = Math.floor(totalOunces / this.userHydrationInfo.length.toFixed(2));
      return this.averageOuncesConsumed;
  };

  getOuncesByDate(date) {
    let ouncesPerDay = this.userHydrationInfo.find(hydrationObj => hydrationObj.date === date );
      return ouncesPerDay.numOunces;
  };

  getOuncesByWeek(id, date) {
    let user = this.userHydrationInfo.filter(user => user.userID === id);
    let firstDateIndex = user.indexOf(user => user.date === date)
    let ouncesByWeek = user.splice(firstDateIndex - 6).map(user => user.numOunces);
    return ouncesByWeek
  };

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}