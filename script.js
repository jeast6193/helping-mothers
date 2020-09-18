$(document).ready(function () {
  var input = "postpartum";
  var APIKey = "pShC1Qa4Ri9WY1lpSGtAcM7l7o0QonLC";
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    input +
    "&api-key=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var articleOne = response.response.docs[1].abstract;
    var articleLinkOne = response.response.docs[1].web_url;
    console.log(articleOne);
    console.log(articleLinkOne);
    $("dropdown-item one").attr("src", articleLinkOne);
  });
});
