Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

var currentUser = Parse.User.current();
if (currentUser) {}

else {
  $(document).ready(setTimeout(function() {
    $('#newsletter').modal('show')}, 5000)
  );
}

var NewsletterSubs = Parse.Object.extend("NewsletterSubs");
var newsletterSubs = new NewsletterSubs();

document.getElementById("newslettersubmit").addEventListener("click" , function() {
  newsletterSubs.set("email", document.getElementById("newsletteremail").value);

  newsletterSubs.save(null, {
    success: function(newsletterSubs) {
      console.log("Success!");
      $('#newsletter').modal('hide');
    },
    error: function(newsletterSubs, error) {
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  });
});