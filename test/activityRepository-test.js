const chai = require("chai");
const expect = chai.expect;
const ActivityRepositorty = require("../src/activityRepository");
const fakeActivity = require("../data/fakeActivity");
let activityRepository;
let user16;

describe("Activity Repository", () => {

  beforeEach(() => {
  activityRepository = new ActivityRepositorty(fakeActivity);
  allActivity = [
    {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
    }, {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 6637,
        "minutesActive": 175,
        "flightsOfStairs": 36
    }, {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 14329,
        "minutesActive": 168,
        "flightsOfStairs": 18
    }, {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
    }, {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 8429,
        "minutesActive": 275,
        "flightsOfStairs": 2
    }, {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
    }, {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 6760,
        "minutesActive": 135,
        "flightsOfStairs": 6
    }, {
        "userID": 4,
        "date": "2019/06/15",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
    }, {
        "userID": 4,
        "date": "2019/06/16",
        "numSteps": 10689,
        "minutesActive": 204,
        "flightsOfStairs": 10
    }, {
        "userID": 4,
        "date": "2019/06/17",
        "numSteps": 8160,
        "minutesActive": 72,
        "flightsOfStairs": 25
    }, {
        "userID": 4,
        "date": "2019/06/18",
        "numSteps": 10056,
        "minutesActive": 120,
        "flightsOfStairs": 34
    }, {
        "userID": 4,
        "date": "2019/06/19",
        "numSteps": 13451,
        "minutesActive": 203,
        "flightsOfStairs": 2
    }, {
        "userID": 4,
        "date": "2019/06/20",
        "numSteps": 3314,
        "minutesActive": 240,
        "flightsOfStairs": 6
    }, {
        "userID": 4,
        "date": "2019/06/21",
        "numSteps": 11807,
        "minutesActive": 142,
        "flightsOfStairs": 46
    }, {
        "userID": 8,
        "date": "2019/06/15",
        "numSteps": 10333,
        "minutesActive": 114,
        "flightsOfStairs": 31
    }, {
        "userID": 8,
        "date": "2019/06/16",
        "numSteps": 4217,
        "minutesActive": 23,
        "flightsOfStairs": 15
    }, {
        "userID": 8,
        "date": "2019/06/17",
        "numSteps": 6233,
        "minutesActive": 48,
        "flightsOfStairs": 19
    }, {
        "userID": 8,
        "date": "2019/06/18",
        "numSteps": 7658,
        "minutesActive": 166,
        "flightsOfStairs": 39
    }, {
        "userID": 8,
        "date": "2019/06/19",
        "numSteps": 9775,
        "minutesActive": 259,
        "flightsOfStairs": 38
    }, {
        "userID": 8,
        "date": "2019/06/20",
        "numSteps": 5680,
        "minutesActive": 137,
        "flightsOfStairs": 2
    }, {
        "userID": 8,
        "date": "2019/06/21",
        "numSteps": 14267,
        "minutesActive": 84,
        "flightsOfStairs": 10
    }, {
        "userID": 16,
        "date": "2019/06/15",
        "numSteps": 6188,
        "minutesActive": 292,
        "flightsOfStairs": 32
    }, {
        "userID": 16,
        "date": "2019/06/16",
        "numSteps": 4496,
        "minutesActive": 234,
        "flightsOfStairs": 0
    }, {
        "userID": 16,
        "date": "2019/06/17",
        "numSteps": 7385,
        "minutesActive": 146,
        "flightsOfStairs": 16
    }, {
        "userID": 16,
        "date": "2019/06/18",
        "numSteps": 9351,
        "minutesActive": 285,
        "flightsOfStairs": 38
    }, {
        "userID": 16,
        "date": "2019/06/19",
        "numSteps": 14692,
        "minutesActive": 266,
        "flightsOfStairs": 43
    }, {
        "userID": 16,
        "date": "2019/06/20",
        "numSteps": 7686,
        "minutesActive": 77,
        "flightsOfStairs": 14
    }, {
        "userID": 16,
        "date": "2019/06/21",
        "numSteps": 2495,
        "minutesActive": 117,
        "flightsOfStairs": 6
      }
    ]

  user16 = [
    {
      "userID": 16,
      "date": "2019/06/15",
      "numSteps": 6188,
      "minutesActive": 292,
      "flightsOfStairs": 32
  }, {
      "userID": 16,
      "date": "2019/06/16",
      "numSteps": 4496,
      "minutesActive": 234,
      "flightsOfStairs": 0
  }, {
      "userID": 16,
      "date": "2019/06/17",
      "numSteps": 7385,
      "minutesActive": 146,
      "flightsOfStairs": 16
  }, {
      "userID": 16,
      "date": "2019/06/18",
      "numSteps": 9351,
      "minutesActive": 285,
      "flightsOfStairs": 38
  }, {
      "userID": 16,
      "date": "2019/06/19",
      "numSteps": 14692,
      "minutesActive": 266,
      "flightsOfStairs": 43
  }, {
      "userID": 16,
      "date": "2019/06/20",
      "numSteps": 7686,
      "minutesActive": 77,
      "flightsOfStairs": 14
  }, {
      "userID": 16,
      "date": "2019/06/21",
      "numSteps": 2495,
      "minutesActive": 117,
      "flightsOfStairs": 6
    }
  ]
});

  it("should be a function", () => {
    expect(ActivityRepositorty).to.be.a('function');
  });

  it("should have activity information for all users", () => {
    expect(activityRepository.activityInformation).to.eql(fakeActivity);
  });

  it("should be able to get a user by their Id", () => {
    expect(activityRepository.getUserById(16)).to.eql(user16)
  });

  it("should have an average stairs climbed for all users", () => {
    expect(activityRepository.getAverageStairsClimbedByDayAllUsers("2019/06/15")).to.equal(15.86)
  });

  it("should have an average steps taken for all users", () => {
    expect(activityRepository.getAverageStepsTakenByDayAllUsers("2019/06/15")).to.equal(3369.14)
  });

  it("should have an average minutes active for all users", () => {
    expect(activityRepository.getAverageMinutesActiveByDayAllUsers("2019/06/15")).to.equal(94.29)
  });
});


