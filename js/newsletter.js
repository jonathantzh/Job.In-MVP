Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

var currentUser = Parse.User.current();
if (currentUser) {}

else {
  $(document).ready(function(){
    $(window).scroll(function() {
    if($(document).scrollTop()>$(document).height()-$(window).height()-100) {
      $('#newsletter').modal('show');
    }
  });
});
}

var NewsletterSubs = Parse.Object.extend("NewsletterSubs");
var newsletterSubs = new NewsletterSubs();

document.getElementById("newslettersubmit").addEventListener("click" , function() {
  if(document.getElementById("newsletteremail").value==='') {
    alert("Please enter a valid email address");
    return;
  }

  newsletterSubs.set("email", document.getElementById("newsletteremail").value);

  newsletterSubs.save(null, {
    success: function(newsletterSubs) {
      alert("Success!");
      location.reload();
      $('#newsletter').modal('hide');
    },
    error: function(newsletterSubs, error) {
      alert(error);
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  });
});
