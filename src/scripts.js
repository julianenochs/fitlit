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
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    return `${today}`
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

function hideSplash() {
    $('#splash-page-js').fadeOut(2000);
    $('#splash-page-js').hide();
    $('#main-page-js').fadeIn(1000);
    $('#header-js').show();
}
function submitDate() {
    // date = $('#date__input-js').val();
    // formattedDate = date.replace(/-/gi, "/");
    // userHydrationByWeekChart.data.datasets[0].data = hydration.getOuncesByWeek(randomId, formattedDate)
    // console.log(userHydrationByWeekChart.data.datasets[0].data)
    // userHydrationByWeekChart.update()
}

$('#main-date-js').text(findTodaysDate());
$('#user-name__display').text(user.name);
$('#user-address__display').text(user.address);
$('#user-email__display').text(user.email);
$('#user-stride__display').text(user.strideLength);
$('#user-step__display').text(user.dailyStepGoal);
$('#user-sleep-last-night__display-js').text(sleep.getAverageSleepInformation('hoursSlept')).val();
$('#user-name__display').text(user.name);
$('#user-address__display').text(user.address);
$('#user-email__display').text(user.email);
$('#user-stride__display').text(user.strideLength);
$('#user-step__display').text(user.dailyStepGoal);

//********** Hydration
// let hydrationChart = hydration.getOuncesByWeek(randomId, formattedDate);
	$('#user-hydration-all-time__display-js').text(`Average ounces consumed: ${hydration.getAverageOuncesPerDayAllTime()}oz`);
	$('#user-hydration-by-date__display-js').text(`Ounces consumed today: ${hydration.getOuncesByDate('2019/06/15')}oz`);
	// $('#user-hydration-by-week__display-js').text(`Weekly Hydration: ${hydration.getOuncesByWeek('2019/06/15')}`);

//*************Activity
	$('#user-steps-goal__display-js').text(`Step goal reached today: ${activity.getStepGoalByDay('2019/06/15')}!`);
	$('#user-minutes-today__display-js').text(`Minutes active today: ${activity.getMinutesActivePerDayByDate('2019/06/15')}`);
	$('#user-number-steps-today__display-js').text(`Todays step count: ${activity.getStepsPerDay('2019/06/15')}`);
	$('#user-distance-lasest-day-step-count__display-js').text(`Todays miles: ${activity.getDistanceBasedOnStepCountAndDay('2019/06/15')}`);
    $('#user-steps-today__display-js').text(`Step goal reached today: ${activity.getStepGoalByDay('2019/06/15')}!`);
	$('#user-minutes-today__display-js').text(`Minutes active today: ${activity.getMinutesActivePerDayByDate('2019/06/15')}`);

//********** Charts 
// let userHydrationByWeek = $('#user-hydration-by-week__display-js');
// let userHydrationByWeekChart = new Chart(userHydrationByWeek, {
//     type: 'doughnut',
//     data: {
//         labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
//         datasets: [{
//             label: "Water Drank (ounces)",
//             backgroundColor: ["#3e95cd", "#8e5ea2", "#6BBFC3", "#e8c3b9", "#c45850", "pink", "orange"],
//             data: hydrationChart,
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Your Water Intake'
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//     }
// });
});
