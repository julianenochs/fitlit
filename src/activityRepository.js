class ActivityRepository {
  constructor(activityInformation) {
    this.activityInformation = activityInformation;
    this.user;
  }

  getUserById(userID) {
    this.user = this.activityInformation.filter(user => user.userID === userID);
    return this.user;    
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}