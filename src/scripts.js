let randomId = Math.floor(Math.random() * 50);
let userRepository = new UserRepository(userData);
let userInfo = userRepository.getUserById(randomId);
let user = new User(userInfo);
let sleepRepository = new SleepRepository(sleepData);
let sleepInfo = sleepRepository.getUserById(randomId);
let sleep = new Sleep(sleepInfo);
let hydrationRepository = new HydrationRepository(hydrationData);
let userHydrationInfo = hydrationRepository.getUserById(randomId);
let hydration = new Hydration(userHydrationInfo);
let activityRepository = new ActivityRepository(activityData);
let userActivityInfo = activityRepository.getUserById(randomId);
let activity = new Activity(userActivityInfo, user);

function findTodaysDate() {
    let today = new Date();
    console.log(today);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
		today = yyyy + '/' + mm + '/' + dd;
    return `${today}`;
}

$(document).ready(() => {
    $('#splash-page-js').show();
    $('#main-page-js').hide();
    $('#header-js').hide();
    $('#enter__button-js').click(hideSplash);
    $('#submit-date__button').click(submitDate);
    let date = $('#date__input-js').val();
    let formattedDate = date.replace(/-/gi, "/");
    let hydrationChart = hydration.getOuncesByWeek(randomId, findTodaysDate());
    let stepCountChart = activity.getWeeklyStepCount(randomId, findTodaysDate());
    let flightsClimbedChart = activity.getWeeklyFlightsClimbed(randomId, findTodaysDate());
<<<<<<< HEAD

=======
    let weeklySleepChart = sleep.getHoursSleptByWeek(randomId, findTodaysDate());
           
>>>>>>> 5174312f7d227354d2fec2a17c8465854e095bd2
	function hideSplash() {
		$('#splash-page-js').fadeOut(2000);
		$('#splash-page-js').hide();
		$('#main-page-js').fadeIn(1000);
		$('#header-js').show();
    
function submitDate() {
    date = $('#date__input-js').val();
    formattedDate = date.replace(/-/gi, "/");
    hydrationChart.data.datasets[0].data = hydration.getOuncesByWeek(randomId, formattedDate);
    userHydrationByWeekChart.update();
    stepCountByWeekChart.data.datasets[0].data = activity.getWeeklyStepCount(randomId, formattedDate);
    stepCountByWeekChart.update();
    flightsClimbedByWeekChart.data.datasets[0].data = activity.getWeeklyFlightsClimbed(randomId, formattedDate);
    flightsClimbedByWeekChart.update();
    userSleepByWeekChart.data.datasets[0].data = sleep.getHoursSleptByWeek(randomId, formattedDate)
    userSleepByWeekChart.update();
}
	};

	//******* User Info *********
	$('#main-date-js').text(findTodaysDate());
	$('#user-name__display').text(user.name);
	$('#user-address__display').text(user.address);
	$('#user-email__display').text(user.email);
	$('#user-stride__display').text(user.strideLength);
	$('#user-step__display').text(user.dailyStepGoal);
	$('#user-name__display').text(user.name);
	$('#user-address__display').text(user.address);
	$('#user-email__display').text(user.email);
	$('#user-stride__display').text(user.strideLength);
	$('#user-step__display').text(user.dailyStepGoal);

	//********** Hydration **********
	$('#user-hydration-all-time__display-js').text(`Average ounces consumed: ${hydration.getAverageOuncesPerDayAllTime()}oz`);
	$('#user-hydration-by-date__display-js').text(`Ounces consumed today: ${hydration.getOuncesByDate(randomId, findTodaysDate())}oz`);


    //********** Activity **********
    $('#user-steps-goal__display-js').text(`Step goal: ${activity.getStepGoalByDay(findTodaysDate())}!`);
    $('#user-minutes-today__display-js').text(`Minutes active today: ${activity.getMinutesActivePerDayByDate(randomId, findTodaysDate())}`);
    $('#user-number-steps-today__display-js').text(`Todays step count: ${activity.getStepsPerDay(randomId, findTodaysDate())}`);
    $('#user-steps-by-mile__display-js').text(`Todays miles: ${activity.getDistanceBasedOnStepCountAndDay(randomId, findTodaysDate())}`);
    $('#user-redrocks-climbed').text(`Times you climbed Red Rocks this week: ${activity.getRedRocksTimesClimbed(randomId, findTodaysDate())}`);

    //********** Sleep **********
    $('#user-sleep-last-night__display-js').text(sleep.getAverageSleepInformation('hoursSlept'));
    $('#sleep-last-night-js').text(sleep.getSleepDataByDate(randomId, findTodaysDate(), 'hoursSlept'));
    $('#sleep-quality-last-night-js').text(sleep.getSleepDataByDate(randomId, findTodaysDate(), 'sleepQuality'));

	//**** User vs. All users ****
	$('#user-number-steps-today__display-table-js').text(`${activity.getStepsPerDay(randomId, findTodaysDate())}`)
	$('#all-users-average-step-today__display-tabl-js').text(`${activityRepository.getAverageStepsTakenByDayAllUsers(findTodaysDate())}`)
	$('#user-minutes-active-today__display-table-js').text(`${activity.getMinutesActivePerDayByDate(randomId, findTodaysDate())}`)
	$('#all-users-average-minutes-active-today__display-table-js').text(`${activityRepository.getAverageMinutesActiveByDayAllUsers(findTodaysDate())}`)
	$('#user-average-flights-today__display-table-js').text(`${activity.getStairFlightsByDay(randomId, findTodaysDate())}`)
	$('#all-users-average-flights-today__display-table-js').text(`${activityRepository.getAverageStairsClimbedByDayAllUsers(findTodaysDate())}`)

    // ********** Charts **********
    let userHydrationByWeek = $('#hydration-by-week');
    let userHydrationByWeekChart = new Chart(userHydrationByWeek, {
        type: 'bar',
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                label: "Water Drank (ounces)",
                backgroundColor: ["#E102F9", "#C5FF8C", "#FFE74C", "#47CEED", "#FF631C", "#E0FF19", "#D47FFF"],
                data: hydrationChart,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Your Water Intake'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        }

    });

    let stepCountByWeek = $('#step__chart');
    let stepCountByWeekChart = new Chart(stepCountByWeek, {
        type: 'bar',
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                label: "Steps Taken Daily",
                backgroundColor: ["#E102F9", "#C5FF8C", "#FFE74C", "#47CEED", "#FF631C", "#E0FF19", "#D47FFF"],
                data: stepCountChart,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Your Steps This Week'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        }

    });

    let flightsClimbedByWeek = $('#flights-climbed__chart');
    let flightsClimbedByWeekChart = new Chart(flightsClimbedByWeek, {
        type: 'bar',
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                label: "Flights Climbed",
                backgroundColor: ["#E102F9", "#C5FF8C", "#FFE74C", "#47CEED", "#FF631C", "#E0FF19", "#D47FFF"],
                data: flightsClimbedChart,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Flights Climbed Weekly'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    let userSleepByWeek = $('#sleep-by-week');
    let userSleepByWeekChart = new Chart(userSleepByWeek, {
        type: 'bar',
        data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [{
                label: "Hours Slept",
                backgroundColor: ["#E102F9", "#C5FF8C", "#FFE74C", "#47CEED", "#FF631C", "#E0FF19", "#D47FFF"],
                data: weeklySleepChart,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Hours Slept This Week'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });
});
