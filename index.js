$(document).ready(() => {

    localStorage.getItem('login') && window.location.replace('./orders.html');

    $("#login-form").submit((e) => {
        e.preventDefault();

        let userName = $("#userName").val();
        let password = $("#password").val();

        if (userName === password) {
            localStorage.setItem('login', JSON.stringify(true));
            alert('login Successful');
            window.location.href = './orders.html';
        }
        else {
            alert('please enter valid credentials');
        }
    });
});
