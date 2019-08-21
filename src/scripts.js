let randomId = Math.floor(Math.random() * 50 + 1)
let userRepository = new UserRepository(userData)
// let userInfo = userRepository.getUserData(randomId)
// let user = new User(userInfo)


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
    $('#user-info__display-js').text(user.name)
});