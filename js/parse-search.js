Parse.initialize("jYY9sPa7vefy9J3A1YxwVLfUTMRBVzIc9SefECZ7", "rrGAz3YXeI3Pijz2CmBum2gDIWpzUQDbsjpwvfSN");

var SearchQueries = Parse.Object.extend("SearchQueries");
var searchQuery = new SearchQueries();

document.getElementById("searchsubmit").addEventListener("click" , function() {
  searchQuery.set("query", document.getElementById("searchtext").value);
  if(currentUser) {
    searchQuery.set("user", currentUser.get("username"));
  }
  searchQuery.save(null, {
    success: function(searchQuery) {
      console.log("Success!");
    },
    error: function(searchQuery, error) {
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  });
})

  // searchQuery.fetch({
  //   success: function(searchQuery) {
  //       $("#searchtext").value = searchQuery;
  //       alert("Success!");
  //     },
  //     error: function(searchQuery, error) {
  //       // The object was not refreshed successfully.
  //       // error is a Parse.Error with an error code and message.
  //     }
  //   });
