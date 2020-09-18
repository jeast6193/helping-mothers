$(document).ready(function () {
  var now = new Date();
  var oneYearAgo = now.setFullYear(now.getFullYear() - 1);
  oneYearAgo = new Date(oneYearAgo).toISOString().split(".")[0];
  var input = "postpartum";
  var input2 = "selfcare";
  var apiKey = "QIuBjFev0Nyb8VP-CwAwvfWQ7EGV7eS-yM9n3GaFqTurugmq";
  var queryURL =
    "https://api.currentsapi.services/v1/search?language=en&type=2&apiKey=" +
    apiKey +
    "&keywords=" +
    input +
    "&start_date=" +
    oneYearAgo;
  var queryURL2 =
    "https://api.currentsapi.services/v1/search?language=en&type=2&apiKey=" +
    apiKey +
    "&keywords=" +
    input2 +
    "&start_date=" +
    oneYearAgo;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var articleOne = response.news[0].title;
    var articleLinkOne = response.news[0].url;
    var articleTwo = response.news[1].title;
    var articleLinkTwo = response.news[1].url;
    var articleThree = response.news[2].title;
    var articleLinkThree = response.news[2].url;
    // console.log(articleOne);
    // console.log(articleLinkOne);
    $("#articleOne").attr("href", articleLinkOne);
    $("#articleOne").text(articleOne);
    $("#articleTwo").attr("href", articleLinkTwo);
    $("#articleTwo").text(articleTwo);
    $("#articleThree").attr("href", articleLinkThree);
    $("#articleThree").text(articleThree);
  });
  $.ajax({
    url: queryURL2,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var articleFour = response.news[0].title;
    var articleLinkFour = response.news[0].url;
    var articleFive = response.news[1].title;
    var articleLinkFive = response.news[1].url;
    var articleSix = response.news[2].title;
    var articleLinkSix = response.news[2].url;
    // console.log(articleOne);
    // console.log(articleLinkOne);
    $("#articleFour").attr("href", articleLinkFour);
    $("#articleFour").text(articleFour);
    $("#articleFive").attr("href", articleLinkFive);
    $("#articleFive").text(articleFive);
    $("#articleSix").attr("href", articleLinkSix);
    $("#articleSix").text(articleSix);
  });
});
