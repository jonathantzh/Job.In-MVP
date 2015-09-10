Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

var submit = document.getElementById("submitEmail");

submit.addEventListener("click", function () {
    function submitEmail() {
    var emailString = new Parse.Object("submitEmail");
    emailString.set("email", document.getElementById("emailString").value);
    
    emailString.save({
        success: function (data) {
            alert('Email Submitted!');
            console.log("success");
        },
        error: function (err) {
            console.log(err);
        }
    })
    
}

})