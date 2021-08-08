function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email is Valid";
        text.style.color = "#00ff00";

    }else{
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Please provide a valid e-mail address";
        text.style.color = "#ff0000";
    }
    if (email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email address is required";
        text.style.color = "#00ff00";

    }
}

/*
function ValidateEmail(inputText){
 
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(inputText.value.match(mailformat)){
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;

}else if(inputText.value.length == 0){
    messages.push("Email address is required");
    return true;

}else{ 
    messages.push("Please provide a valid e-mail address");
    document.form1.text1.focus();
    return false;
}



}
*/


