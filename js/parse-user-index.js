Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

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

// biz card info
    $('#profileFullName').html(currentUser.get("fullname"));
    $('#profileObj').html(currentUser.get("objective"));
    $('#profileEducation').html(currentUser.get("education"));
    $('#profileEmail').html(currentUser.get("username"));
    $('#profileContact').html(currentUser.get("contact"));
    $('#profileSkills').html(currentUser.get("skills"));

    $('#logIn').hide();
    $('#signUp1').hide();
    $('#signUp2').hide();
    $('#companylink').hide();
} else {
    // show the signup or login page
    $('#logOut').hide();
    $('#viewBizCard').hide();
    $('#editProfile').hide();
    $('#browseheader').hide();
}

document.getElementById("forgotButton").addEventListener("click", function(){
        $("#closeLogin").click();
    });

document.getElementById("submitForgot").addEventListener("click", function(){
    var forgotEmail = document.getElementById("forgotEmail").value;

    Parse.User.requestPasswordReset(forgotEmail, {
    success: function() {
      alert("An password reset email has been sent to the entered email.");
      $("#forgotClose").click();
      document.getElementById("forgotEmail").value='';
    // Password reset request was sent successfully
    },
    error: function(error) {
      // Show the error message somewhere
      alert("Error: " + error.code + " " + error.message);
    }
  });
});

document.getElementById("submitForm").addEventListener("click", function(){
    if (document.getElementById("inputUsername").value && document.getElementById("inputPassword").value) {
        signUp();
        $("#closeForm").click();
        document.getElementById("inputCPassword").value = '';
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

document.getElementById("logOut").addEventListener("click", function(){
    Parse.User.logOut();
    alert("Success!");
    location.reload();
    // Hooray! Let them use the app now.
});

//function definitions

function signUp() {
  if(document.getElementById('inputPassword').value != document.getElementById('inputCPassword').value) {
    alert('Passwords do not match!');
    return;
  }
  // if(document.getElementById('inputAge').length != 10) {
  //   alert('Invalid date of birth entered!');
  //   return;
  // }
    var fullname = document.getElementById('inputFullName').value;
    var username = document.getElementById('inputUsername').value;
    var password = document.getElementById('inputPassword').value;
    var age = document.getElementById('inputAge').value;
    var gender = document.getElementById('inputGender').value;
    var nationality = document.getElementById('inputNationality').value;
    var contact = document.getElementById('inputContact').value;
    var education = document.getElementById('inputEducation').value;
    var objective = document.getElementById('inputObj').value;
    var skills = document.getElementById('inputSkills').value;

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
    user.set("email", username);
    user.set("password", password);
    user.set("age", age);
    user.set("gender", gender);
    user.set("nationality", nationality);
    user.set("contact", contact);
    user.set("education", education);
    user.set("objective", objective);
    user.set("skills", skills);

    user.set("profilePic", profilePhoto);
    user.set("profileResume", profileResume);

    user.signUp(null, {
    success: function(user) {
    alert("Welcome to Airflink!");
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
        alert("Error: Username and/or Password do not match! Try again.");
      }
    });
}
