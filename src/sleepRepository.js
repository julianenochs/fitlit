class SleepRepository {
    constructor(sleepData) {
        this.sleepData = sleepData;
        this.averageSleepQuality; 
        this.user; 
    }

    getAllUsersAverageSleepQuality() {
        let allSleepQuality = this.sleepData.reduce((accumulator, sleepObj) => {
            accumulator += sleepObj.sleepQuality
            return accumulator
        }, 0)
        let averageSleepQuality = (allSleepQuality / this.sleepData.length)
        this.averageSleepQuality = Number(averageSleepQuality.toFixed(2))
        return this.averageSleepQuality
    }

    findUsersWithGreatSleepQuality(date) {
        let greatSleepers = this.sleepData.filter(user => user.sleepQuality >= 3)
        // console.log(greatSleepers)
        }

// 


    usersWhoSleptTheMost() {
        let sortedSleepers = this.sleepData.sort((a, b) => {
        return b.hoursSlept - a.hoursSlept
        })
        if (sortedSleepers[0].hoursSlept === sortedSleepers[1].hoursSlept) {
            return sortedSleepers[0].userID && sortedSleepers[1].userID
        } else {
            return sortedSleepers[0].userID
        }
    }

    getUserById(id) {
        this.user = this.sleepData.filter(user => user.userID === id)
        return this.user
    }
}

if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
}