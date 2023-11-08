function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "TeviCantik" && password =="12345"){
            if(confirm("Apakah Ingin Login?") == true){
                window.location.href = "https://github.com/Tevinrchyti"
            } else {
                alert("Membatalkan Login!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Password Salah");
            }
    }
} 