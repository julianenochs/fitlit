let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData)
let userInfo = userRepository.getUserData(randomId)
let user = new User(userInfo)


$(document).ready(() => {
    $('#splash-page-js').show();
    $('#main-page-js').hide();
    $('#header-js').hide();
    $('#enter__button-js').click(hideSplash)
    function hideSplash() {
        $('#splash-page-js').fadeOut(2000);
        $('#splash-page-js').hide();
        $('#main-page-js').fadeIn(1000);
        $('#header-js').show();
    }
    $('#user-name__display').text(user.name)
    $('#user-address__display').text(user.address)
    $('#user-email__display').text(user.email)
    $('#user-stride__display').text(user.strideLength)
    $('#user-step__display').text(user.dailyStepGoal)
});