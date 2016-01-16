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

// edit profile
    $('#editFullName').attr("value", currentUser.get("fullname"));
    $('#editUsername').attr("value", currentUser.get("username"));
    $('#editAge').attr("value", currentUser.get("age"));
    $('#editGender').attr("value", currentUser.get("gender"));
    $('#editNationality').attr("value", currentUser.get("nationality"));
    $('#editObj').attr("value", currentUser.get("objective"));
    $('#editEducation').attr("value", currentUser.get("education"));
    $('#editContact').attr("value", currentUser.get("contact"));
    $('#editSkills').attr("value", currentUser.get("skills"));

    $('#logIn').hide();
} else {
    // show the signup or login page
    $('#logOut').hide();
    $('#viewBizCard').hide();
    $('#editProfile').hide();
}

document.getElementById("submitEdit").addEventListener("click", function(){
    if (document.getElementById("editUsername").value && document.getElementById("editPassword").value) {
        editProfile();
    }
  });

  document.getElementById("submitEditPassword").addEventListener("click", function(){
    if(document.getElementById('editPassword').value!=document.getElementById('editCPassword').value) {
      alert("Passwords do not match!");
      return;
    }
    var password = document.getElementById('editPassword').value;
    var User = Parse.Object.extend("_User");
    var editUser = Parse.User.current();
    editUser.set("password", password);
    editUser.save(null, {
      success: function(editUser) {
          editUser.save();
          alert("Success! Log in again to view updated information.");
          Parse.User.logOut();
          window.location.replace("index.html");
      },
      error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
      }
    });
  });

document.getElementById("logOut").addEventListener("click", function(){
    Parse.User.logOut();
    alert("Success!");
    location.reload();
    // Hooray! Let them use the app now.
});

//function definitions
function editProfile() {

    var fullname = document.getElementById('editFullName').value;
    var username = document.getElementById('editUsername').value;
    var age = document.getElementById('editAge').value;
    var gender = document.getElementById('editGender').value;
    var nationality = document.getElementById('editNationality').value;
    var contact = document.getElementById('editContact').value;
    var education = document.getElementById('editEducation').value;
    var objective = document.getElementById('editObj').value;
    var skills = document.getElementById('editSkills').value;

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
    editUser.set("age", age);
    editUser.set("gender", gender);
    editUser.set("nationality", nationality);
    editUser.set("contact", contact);
    editUser.set("education", education);
    editUser.set("objective", objective);
    editUser.set("skills", skills);
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
