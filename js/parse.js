Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

document.getElementById("submitForm").addEventListener("click", function(){
submitEmail();
})

function submitEmail() {
    var UserForm = new Parse.Object("UserForm");
    UserForm.set("firstName", document.getElementById("InputFname").value);
    UserForm.set("lastName", document.getElementById("InputLname").value);
    UserForm.set("email", document.getElementById("InputEmailFirst").value);
    UserForm.set("school", document.getElementById("InputSchool").value);
    UserForm.set("study", document.getElementById("InputStudy").value);
    UserForm.set("idealEnv", document.getElementById("InputEnv").value);
    
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