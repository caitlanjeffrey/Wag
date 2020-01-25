$(document).ready(function () {
    $('#sign-in-button').on('click', function (e) {
        e.preventDefault();

        const userData = {
            email: $('#username-input')
                .val()
                .trim(),
            password: $('#password-input')
                .val()
                .trim()
        };

        console.log(userData)

        $.ajax({
            method: 'POST',
            url: '/api/user/login',
            data: userData
        }).then(function(res){
            console.log(res)
            window.location.replace("/");
        })

        console.log("successful")
    });
});