function myFunc2 () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if(usernameInput.value.length == 0){
        alert('Please enter the username');
        return;
    }

    if(passwordInput.value.length == 0){
        alert('Please enter the password');
        return;
    }

    alert('Login Successful');
}
