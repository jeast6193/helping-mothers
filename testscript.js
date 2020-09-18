$(document).ready(function () {
  $(".search").on("click", function () {
    console.log(this);
    event.preventDefault();
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=pShC1Qa4Ri9WY1lpSGtAcM7l7o0QonLC";
    //   var APIKey= "";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});
