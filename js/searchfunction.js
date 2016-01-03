require([
  'js/jquery.js',
  'js/lunr.js',
], function (_, lunr) {

document.getElementById("searchsubmit").addEventListener("click" , function() {
  var query = document.getElementById("searchvalue").value;
  var results = idx.search(query).map(function (result) {
    return questions.filter(function (q) { return q.id === parseInt(result.ref, 10);})[0];
  });
  $('#result').html(results);
  console.log(results);
});

var questions = JSON.parse(smsdome).questions.map(function (raw) {
  return {
    title: raw.title,
    body: raw.body,
    industry: raw.industry
  };
});

var idx = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('body', { boost: 5 });
    this.field('industry', { boost: 8 });
});

idx.add(smsdome);
idx.add(visenze);

var smsdome = {
    "title": "SmsDome",
    "body": "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.",
    "industry": "Communications Technology SMS Texting Messaging Phone Mobile Message",
    "id": 1
};

var visenze = {
    "title": "Visenze",
    "body": "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.",
    "industry": "Digial Media Technology Image Recognition",
    "id": 2
};

});
