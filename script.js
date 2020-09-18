$(document).ready(function () {
  var now = new Date();
  var oneYearAgo = now.setFullYear(now.getFullYear() - 1);
  oneYearAgo = new Date(oneYearAgo).toISOString().split(".")[0];
  var input = "postpartum";
  var apiKey = "QIuBjFev0Nyb8VP-CwAwvfWQ7EGV7eS-yM9n3GaFqTurugmq";
  var queryURL =
    "https://api.currentsapi.services/v1/search?language=en&type=2&apiKey=" +
    apiKey +
    "&keywords=" +
    input +
    "&start_date=" +
    oneYearAgo;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response.news[0].description);
    var articleOne = response.news[0].title;
    var articleLinkOne = response.news[0].url;
    console.log(articleOne);
    console.log(articleLinkOne);
    $("#articleOne").attr("href", articleLinkOne);
    $("#articleOne").text(articleOne);
  });
});
