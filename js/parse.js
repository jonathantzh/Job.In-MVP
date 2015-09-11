Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

document.getElementById("submitEmail").addEventListener("click", function(){
submitEmail();
})

function submitEmail() {
    var emailString = new Parse.Object("submitEmail");
    emailString.set("email", document.getElementById("email").value);
    
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