require([
  'js/jquery.js',
  'js/lunr.js',
], function (_, lunr) {

document.getElementById("searchsubmit").addEventListener("click" , function() {
  var query = document.getElementById("searchvalue").value;

switch (idx.search(query)[0].ref) {

  case 1:
  result1 = smsdome;
  break;

  case 2:
  result1 = visenze;
  break;

  case 3:
  result1 = vault;
  break;

}

switch (idx.search(query)[1].ref) {

  case 1:
  result2 = smsdome;
  break;

  case 2:
  result2 = visenze;
  break;

  case 3:
  result2 = vault;
  break;

}

  $('#result1').html(JSON.stringify(result1));
  $('#result2').html(JSON.stringify(result2));

  console.log(idx.search(query)[0]);
  console.log(idx.search(query)[1]);
  console.log(idx.search(query)[2]);
});

var idx = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('body', { boost: 5 });
    this.field('industry', { boost: 8 });
});

var employees = [
    {"title":"John", "body":"Doe", "industry":"love", "id": 1},
    {"title":"John", "body":"Doe", "industry":"love", "id": 2},
    {"title":"John", "body":"Doe", "industry":"love", "id": 3}
];

var smsdome = {
    "title": "SmsDome",
    "body": "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.",
    "industry": "Communications Technology SMS Texting Messaging Phone Mobile Message",
    "id": 1
};


var visenze = {
    "title": "Visenze Dragon",
    "body": "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.",
    "industry": "Digital Media Technology Image Recognition SMS",
    "id": 2
};

var vault = {
    "title": "Vault Dragon",
    "body": "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. They are stored securely until the customers request for a return.",
    "industry": "Logistics Digital SMS",
    "id": 3
};

idx.add(smsdome);
idx.add(visenze);
idx.add(vault);


}); //end RequireJS
