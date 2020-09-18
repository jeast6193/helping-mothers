$(document).ready(function () {
  //  Defining the variables to
  var now = new Date();
  var oneYearAgo = now.setFullYear(now.getFullYear() - 1);
  oneYearAgo = new Date(oneYearAgo).toISOString().split(".")[0];

  var apiKey = "QIuBjFev0Nyb8VP-CwAwvfWQ7EGV7eS-yM9n3GaFqTurugmq";

  function queryGenerator(input, idString) {
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
      console.log(response.news.length);
      var length = response.news.length;
      for (var i = 0; i < 3; i++) {
        if (i < length) {
          var articleLink = $("<a class='dropdown-item' target='_blank'></a>")
            .attr("href", response.news[i].url)
            .text(response.news[i].title);
          var id = "#" + idString;
          $(id).append(articleLink);
        }
      }
    });
  }
  queryGenerator("postpartum", "postpartum");
  queryGenerator("self care", "selfcare");
});
