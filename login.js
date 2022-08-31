function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email = "steixeira@ua.pt" && password == "admin") {
        alert("Logged In Successfuly!");
        return false;
    }
    else {  
        alert("Something went wrong");
        return false;
    }
}
