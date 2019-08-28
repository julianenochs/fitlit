class Sleep {
    constructor(userSleepInfo) {
        this.userSleepInfo = userSleepInfo
        this.hoursSlept;
        this.sleepQuality
    }

    getAverageSleepInformation(sleepProperty) {
        let allSleepData = this.userSleepInfo.reduce((accumulator, userObj) => {
            accumulator += userObj[sleepProperty]
            return accumulator
        }, 0)
        let average = allSleepData / this.userSleepInfo.length
        average = Number(average.toFixed(2))
        sleepProperty === 'hoursSlept' ? this.hoursSlept = average : this.sleepQuality = average
        return average
    }

    getSleepDataByDate(date, sleepProperty) {
    let dateObj = this.userSleepInfo.find(sleepInfo => sleepInfo.date === date)
       return dateObj[sleepProperty]
    }

    getHoursSleptByWeek(date) {
        let firstDateIndex = this.userSleepInfo.indexOf(user => user.date === date)
        let week = this.userSleepInfo.splice(firstDateIndex - 6)
        let sum = week.reduce((accumulator, user) => {
            accumulator += user.hoursSlept
            return accumulator
        }, 0)
        let average = sum / week.length
        return Number(average.toFixed(2))
    }
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
}