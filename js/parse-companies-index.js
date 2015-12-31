Parse.initialize("IfS2Dus2BdLSgzIQuxO6MU3Pr4Nw2zDanuhMJUQH", "H2mqcIuwNtgvApuiU9S7fcKCC3USWfgQwO1CRVsq");

var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
    var profilePhoto = currentUser.get("profilePic");

    if(profilePhoto) {
      $('#profileImg')[0].src = profilePhoto.url();
    }

    else {
      $('#profileImg')[0].src = "img/silhouette.jpg";
    }

    $('#profileFullName').html(currentUser.get("fullname"));
    $('#profileObj').html(currentUser.get("objective"));
    $('#profileEducation').html(currentUser.get("education"));
    $('#profileEmail').html(currentUser.get("email"));
    $('#profileContact').html(currentUser.get("contact"));

     //attempted popover
    $('.applyvideo').popover({
    html: true,
    content: function() {
        return 'Click to Submit Your Business Card';
    }
    });

    //editprofile. password not possible
    $('#editFullName').attr("value", currentUser.get("fullname"));
    $('#editUsername').attr("value", currentUser.get("username"));
    $('#editSchool').attr("value", currentUser.get("school"));
    $('#editObj').attr("value", currentUser.get("objective"));
    $('#editEducation').attr("value", currentUser.get("education"));
    $('#editEmail').attr("value", currentUser.get("email"));
    $('#editContact').attr("value", currentUser.get("contact"));

    $('#logIn').hide();
    $('#signUp').hide();
    $('#companylink').hide();
} else {
    // show the signup or login page
    $('#logOut').hide();
    $('#viewBizCard').hide();
    $('#editProfile').hide();
}

document.getElementById("submitForm").addEventListener("click", function(){
    if (document.getElementById("inputUsername").value && document.getElementById("inputPassword").value) {
        signUp();
        $("#closeForm").click();
        document.getElementById("inputUsername").value = '';
        document.getElementById("inputPassword").value = '';
    }
  });

document.getElementById("submitLogin").addEventListener("click", function(){
    if (document.getElementById("loginUsername").value && document.getElementById("loginPassword").value) {
        logIn();
        $("#closeForm2").click();
        document.getElementById("loginUsername").value = '';
        document.getElementById("loginPassword").value = '';
    }
  });

document.getElementById("submitEdit").addEventListener("click", function(){
    if (document.getElementById("editUsername").value && document.getElementById("editPassword").value) {
        editProfile();
        $("#closeForm3").click();
        document.getElementById("editUsername").value = '';
        document.getElementById("editPassword").value = '';
    }
  });

document.getElementById("logOut").addEventListener("click", function(){
    Parse.User.logOut();
    alert("Success!");
    location.reload();
    // Hooray! Let them use the app now.
});

//function definitions

function signUp() {
    var fullname = document.getElementById('inputCompanyName').value;
    var username = document.getElementById('inputUsername').value;
    var password = document.getElementById('inputPassword').value;
    var email = document.getElementById('inputEmail').value;
    var school = document.getElementById('inputSchool').value;
    var contact = document.getElementById('inputContact').value;
    var education = document.getElementById('inputEducation').value;
    var objective = document.getElementById('inputObj').value;


    var fileUploadControl = $("#profilePhotoFileUpload")[0];
    if (fileUploadControl.files.length > 0) {
    var picfile = fileUploadControl.files[0];
    var picname = "profilepic.jpg";
    var profilePhoto = new Parse.File(picname, picfile);
    }

    var fileUploadControl = $("#profileResumeUpload")[0];
    if (fileUploadControl.files.length > 0) {
    var resfile = fileUploadControl.files[0];
    var resname = "resume.pdf";
    var profileResume = new Parse.File(resname, resfile);
    }

    var user = new Parse.User();
    user.set("fullname", fullname);
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    user.set("school", school);
    user.set("contact", contact);
    user.set("education", education);
    user.set("objective", objective);

    user.set("profilePic", profilePhoto);
    user.set("profileResume", profileResume);

    user.signUp(null, {
    success: function(user) {
    alert("Success!");
    // Hooray! Let them use the app now.
    location.reload();
  },
    error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
}

function logIn() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    Parse.User.logIn(username, password, {
      success: function(user) {
        // Do stuff after successful login.
        location.reload();
        alert("Success!");
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("Error: " + error.code + " " + error.message);
      }
    });
}

function editProfile() {
    var fullname = document.getElementById('editFullName').value;
    var username = document.getElementById('editUsername').value;
    var password = document.getElementById('editPassword').value;
    var email = document.getElementById('editEmail').value;
    var school = document.getElementById('editSchool').value;
    var contact = document.getElementById('editContact').value;
    var education = document.getElementById('editEducation').value;
    var objective = document.getElementById('editObj').value;


    var fileUploadControl = $("#editProfilePhotoFileUpload")[0];
    if (fileUploadControl.files.length > 0) {
    var picfile = fileUploadControl.files[0];
    var picname = "editprofilepic.jpg";
    var profilePhoto = new Parse.File(picname, picfile);
    }

    var fileUploadControl = $("#editProfileResumeUpload")[0];
    if (fileUploadControl.files.length > 0) {
    var resfile = fileUploadControl.files[0];
    var resname = "editresume.pdf";
    var profileResume = new Parse.File(resname, resfile);
    }

    var User = Parse.Object.extend("_User");
    var editUser = Parse.User.current();

    editUser.set("fullname", fullname);
    editUser.set("username", username);
    editUser.set("password", password);
    editUser.set("email", email);
    editUser.set("school", school);
    editUser.set("contact", contact);
    editUser.set("education", education);
    editUser.set("objective", objective);
    editUser.set("profilePic", profilePhoto);
    editUser.set("profileResume", profileResume);

    editUser.save(null, {
    success: function(editUser) {
        editUser.save();
        alert("Success! Log in again to view updated information.");
        Parse.User.logOut();
        location.reload();
  },
    error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
}
