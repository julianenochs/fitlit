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
  
  getOuncesByDate(id, date) {
    let user = this.userHydrationInfo.filter(user => user.userID === id)
    let ouncesPerDay = user.find(hydrationObj => hydrationObj.date === date );
      return ouncesPerDay.numOunces;
  };

  getOuncesByWeek(id, date) {
    let user = this.userHydrationInfo.filter(user => user.userID === id)
    let index = user.findIndex(hydrationObj => {
      return hydrationObj.date === date
    });

    let ouncesByWeek = user.splice(index - 6).map(hydrationObj => {
      return `Date: ${hydrationObj.date}: ${hydrationObj.numOunces} `;
    });
    return ouncesByWeek.reverse()
  };

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}