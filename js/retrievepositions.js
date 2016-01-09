Parse.initialize("IfS2Dus2BdLSgzIQuxO6MU3Pr4Nw2zDanuhMJUQH", "H2mqcIuwNtgvApuiU9S7fcKCC3USWfgQwO1CRVsq");

var SmsUser = Parse.Object.extend("User");
var smsQuery = new Parse.Query(SmsUser);
smsQuery.get("P4W6oOTTdG", {
  success: function(smsQuery) {
    // The object was retrieved successfully.
    var opportunities = smsQuery.get("school");
    $('#smspositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var CkUser = Parse.Object.extend("User");
var ckQuery = new Parse.Query(CkUser);
ckQuery.get("P4W6oOTTdG", {
  success: function(ckQuery) {
    // The object was retrieved successfully.
    var opportunities = ckQuery.get("school");
    $('#ckpositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var VisenzeUser = Parse.Object.extend("User");
var visenzeQuery = new Parse.Query(VisenzeUser);
visenzeQuery.get("P4W6oOTTdG", {
  success: function(visenzeQuery) {
    // The object was retrieved successfully.
    var opportunities = visenzeQuery.get("school");
    $('#visenzepositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var GoodrichUser = Parse.Object.extend("User");
var goodrichQuery = new Parse.Query(GoodrichUser);
goodrichQuery.get("P4W6oOTTdG", {
  success: function(goodrichQuery) {
    // The object was retrieved successfully.
    var opportunities = goodrichQuery.get("school");
    $('#goodrichpositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var CaditUser = Parse.Object.extend("User");
var caditQuery = new Parse.Query(CaditUser);
caditQuery.get("P4W6oOTTdG", {
  success: function(caditQuery) {
    // The object was retrieved successfully.
    var opportunities = caditQuery.get("school");
    $('#caditpositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var ClaritiUser = Parse.Object.extend("User");
var claritiQuery = new Parse.Query(ClaritiUser);
claritiQuery.get("P4W6oOTTdG", {
  success: function(claritiQuery) {
    // The object was retrieved successfully.
    var opportunities = claritiQuery.get("school");
    $('#claritipositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var CordlifeUser = Parse.Object.extend("User");
var cordlifeQuery = new Parse.Query(CordlifeUser);
cordlifeQuery.get("P4W6oOTTdG", {
  success: function(cordlifeQuery) {
    // The object was retrieved successfully.
    var opportunities = cordlifeQuery.get("school");
    $('#cordlifepositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var EcovisUser = Parse.Object.extend("User");
var ecovisQuery = new Parse.Query(EcovisUser);
ecovisQuery.get("P4W6oOTTdG", {
  success: function(ecovisQuery) {
    // The object was retrieved successfully.
    var opportunities = ecovisQuery.get("school");
    $('#ecovispositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});

var EtonhouseUser = Parse.Object.extend("User");
var etonhouseQuery = new Parse.Query(EtonhouseUser);
etonhouseQuery.get("P4W6oOTTdG", {
  success: function(etonhouseQuery) {
    // The object was retrieved successfully.
    var opportunities = etonhouseQuery.get("school");
    $('#etonhousepositions').html(opportunities);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});
