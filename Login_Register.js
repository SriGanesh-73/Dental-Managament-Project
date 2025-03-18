const userName = document.getElementById("username");
const password = document.getElementById("password");
const login_form = document.getElementById('login_form');

userName.addEventListener("change",function (userName,password){
    let pattern1 = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    let pattern2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_])(?=.*\d).{8,}$/;
    
    const span = document.getElementById('username_err');
    if(!pattern1.test(userName)){
        span.textContent = "Please Enter a valid username";
    }
    if(!pattern2.test(password)){
        span.textContent = "Please Enter a valid password";
    }
});
login_form.addEventListener("submit",function (userName,password){
    let pattern1 = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    let pattern2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_])(?=.*\d).{8,}$/;
    
    const span = document.getElementById('username_err');
    if(!pattern1.test(userName)){
        span.textContent = "Please Enter a valid username";
    }
    if(!pattern2.test(password)){
        span.textContent = "Please Enter a valid password";
    }
});
