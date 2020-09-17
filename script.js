$(document).ready(function () {
  //   var APIKey = "VUwZOo7wVaQ2nyaZ5sqkePaJTY19bgBmUzg1d4GEsWCiCffi";
  var APIKey = "pShC1Qa4Ri9WY1lpSGtAcM7l7o0QonLC";
  var input = "postpartum";
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    input +
    "&api-key=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      console.log("response", response);
    })
    .fail(function (err) {
      console.log(err);
    });
});
