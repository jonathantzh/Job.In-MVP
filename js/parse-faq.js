Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

document.getElementById("submitForm").addEventListener("click", function(){
    if (document.getElementById("InputFname").value 
        && document.getElementById("InputEmailFirst").value
        && document.getElementById("InputMessage").value) {
        submitEmail();
        $("#closeForm").click();
        document.getElementById("InputFname").value = '';
        document.getElementById("InputEmailFirst").value = '';
        document.getElementById("InputMessage").value = '';
    }
    })

function submitEmail() {
    var UserForm = new Parse.Object("FaqForm");
    UserForm.set("name", document.getElementById("InputFname").value);
    UserForm.set("email", document.getElementById("InputEmailFirst").value);
    UserForm.set("message", document.getElementById("InputMessage").value);
    
    UserForm.save({
        success: function (data) {
            alert('Form Submitted!');
            console.log("success");
        },
        error: function (err) {
            console.log(err);
        }
    })
    
}