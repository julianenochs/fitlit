const chai = require("chai");
const expect = chai.expect;

const Hydration = require("../src/hydration");
const HydrationRepository = require("../src/hydrationRepository");
const fakeHydration = require("../data/fakeHydration");

let hydrationRepository;

describe("Hydration", () => {
  
  beforeEach(() => {
    hydrationRepository = new HydrationRepository(fakeHydration);
    let userHydrationInfo = hydrationRepository.getUserById(16);
    hydration = new Hydration(userHydrationInfo);
  }); 
  
  it("should be a function", () => {
    expect(Hydration).to.be.a('function')
  });
  
  it("should have an average ounces consumed per day all time", () => {
    expect(hydration.getAverageOuncesPerDayAllTime()).to.equal(53.00)
  });

  it("should have ounces consumed per day", () => {
    expect(hydration.getOuncesByDate("2019/06/16")).to.eql(55);
  });

  it("should have ounces consumed each day over a week", () => {
    expect(hydration.getOuncesByWeek(16, "2019/06/21")).to.eql([
      ' Date: 2019/06/15: 40oz',
      ' Date: 2019/06/16: 55oz',
      ' Date: 2019/06/17: 68oz',
      ' Date: 2019/06/18: 53oz',
      ' Date: 2019/06/19: 41oz',
      ' Date: 2019/06/20: 53oz',
      ' Date: 2019/06/21: 61oz'
    ]);
  });
  
});








