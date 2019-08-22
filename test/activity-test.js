const chai = require("chai");
const expect = chai.expect;

const Activity = require("../src/activity");
const ActivityRepository = require("../src/activityRepository");
const fakeActivity = require("../data/fakeActivity");

let activityRepository;

describe("Activity", () => {

  beforeEach(() => {
    activityRepository = new ActivityRepository(fakeActivity);
    let userActivityInformation = activityRepository.getUserById(16)
    activity = new Activity(userActivityInformation);
  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function")
  });

  it("should have a number of minutes active per day", () => {
    expect(activity.getMinutesActivePerDayByDate("2019/06/15")).to.equal(292);
  });

  it("should have an average number of minutes active each week", () => {
    expect(activity.getAverageMinutesActivePerWeek()).to.equal(202.43)
  });

  it("should reach their step goal", () => {
    expect(activity.getStepGoalByDay("2019/06/21")).to.equal(false);
  })

});

