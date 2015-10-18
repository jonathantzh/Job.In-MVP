Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

document.getElementById("submitForm").addEventListener("click", function(){
    if (document.getElementById("InputFname").value 
        && document.getElementById("InputEmailFirst").value
        && document.getElementById("InputSchool").value
        && document.getElementById("InputStudy").value) {
        submitEmail();
        $("#closeForm").click();
        document.getElementById("InputFname").value = '';
        document.getElementById("InputEmailFirst").value = '';
        document.getElementById("InputSchool").value = '';
        document.getElementById("InputStudy").value = '';
    }
    })

function submitEmail() {
    var UserForm = new Parse.Object("UserForm");
    UserForm.set("firstName", document.getElementById("InputFname").value);
    UserForm.set("email", document.getElementById("InputEmailFirst").value);
    UserForm.set("organisation", document.getElementById("InputSchool").value);
    UserForm.set("field", document.getElementById("InputStudy").value);
    
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