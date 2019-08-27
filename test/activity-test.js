const chai = require("chai");
const expect = chai.expect;

const Activity = require("../src/activity");
const ActivityRepository = require("../src/activityRepository");
const fakeActivity = require("../data/fakeActivity");
const UserRepository = require("../src/userRepository");
const User = require("../src/user");
const fakeUser = require("../data/fakeUsers")


let activityRepository;
let userRepository;
let activity;
let user;

describe("Activity", () => {

  beforeEach(() => {
    activityRepository = new ActivityRepository(fakeActivity);
    userRepository = new UserRepository(fakeUser);
    let userInfo = userRepository.getUserById(16);
    let userActivityInformation = activityRepository.getUserById(16);
    user = new User(userInfo);
    activity = new Activity(userActivityInformation, user);
  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it("should have a number of minutes active per day", () => {
    expect(activity.getMinutesActivePerDayByDate(16, "2019/06/15")).to.equal(292);
  });

  it("should have an average number of minutes active each week", () => {
    expect(activity.getAverageMinutesActivePerWeek("2019/06/15")).to.equal(202.43);
  });

  it("should reach their step goal", () => {
    expect(activity.getStepGoalByDay("2019/06/21")).to.equal("Did not meet step goal");
  });

  it("should track days step goal is passed", () => {
    expect(activity.getDaysOverStepGoal()).to.eql(["2019/06/19"]);
  });

  it("should have steps per day", () => {
    expect(activity.getStepsPerDay(16, "2019/06/15")).to.equal(6188)
  });

  it.only("should have a distance walked based on step count", () => {
    expect(activity.getDistanceBasedOnStepCountAndDay(16, "2019/06/15")).to.equal(4.57)
  });

  it("should have a stair climbing record", () => {
    expect(activity.getStairFlightRecord()).to.equal(43)
  });

  it("should get flights of stairs by day", () => {
    expect(activity.getStairFlightsByDay("2019/06/21")).to.equal(6)
  });

});

