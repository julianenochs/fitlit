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

    getSleepDataByDate(id, date, sleepProperty) {
        let user = this.userSleepInfo.filter(user => user.userID === id)
        let dateObj = user.find(sleepInfo => sleepInfo.date === date)
        return dateObj[sleepProperty]
    }

    getHoursSleptByWeek(id, date) {
        let user = this.userSleepInfo.filter(user => user.userID === id)
        let firstDateIndex = user.indexOf(user => user.date === date)
        let week = this.userSleepInfo.splice(firstDateIndex - 6).map(user => user.hoursSlept)
        return week
    }

    bestSleepQuality(date) {
    let userIds = this.userSleepInfo.map(user => user.userID);
    let uniqueIds = new Set(userIds);
    uniqueIds = [...uniqueIds];
    return uniqueIds.reduce((acc, userId) => {
        let userData = this.userSleepInfo.filter(user =>
            user.userID === userId)
        let index = userData.findIndex(day => day.date === date)
        let week = userData.slice(index - 6, index + 1);
        let weekAvg = week.reduce((acc, day) => {
            return acc += day.sleepQuality
        }, 0) / week.length
        if (weekAvg >= 3) {
            acc.push(userId)
        }
        return acc
    }, [])
    }
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
}