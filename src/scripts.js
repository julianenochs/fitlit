let randomId = Math.floor(Math.random() * 50 + 1);
let userRepository = new UserRepository(userData);
let userInfo = userRepository.getUserData(randomId);
let user = new User(userInfo);
let sleepRepository = new SleepRepository(sleepData);
let sleepInfo = sleepRepository.getUserData(randomId);
let sleep = new Sleep(sleepInfo);

function findTodaysDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    return `${today}`
}

$(document).ready(() => {
    $('#splash-page-js').show();
    $('#main-page-js').hide();
    $('#header-js').hide();
    $('#enter__button-js').click(hideSplash);
    function hideSplash() {
        $('#splash-page-js').fadeOut(2000);
        $('#splash-page-js').hide();
        $('#main-page-js').fadeIn(1000);
        $('#header-js').show();
    }
    $('#main-date-js').text(findTodaysDate());
    $('#user-name__display').text(user.name);
    $('#user-address__display').text(user.address);
    $('#user-email__display').text(user.email);
    $('#user-stride__display').text(user.strideLength);
    $('#user-step__display').text(user.dailyStepGoal);
    $('#user-sleep-last-night__display-js').text(sleep.getAverageSleepInformation('hoursSlept')).val();
});