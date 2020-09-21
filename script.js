$(document).ready(function () {
  //Defining the variables for article api
  var now = new Date();
  var oneYearAgo = now.setFullYear(now.getFullYear() - 1);
  oneYearAgo = new Date(oneYearAgo).toISOString().split(".")[0];
  var apiKey = "VUwZOo7wVaQ2nyaZ5sqkePaJTY19bgBmUzg1d4GEsWCiCffi";

  // Function to create article api
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
      console.log(response.news);
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
  queryGenerator("toddlers", "breastfeeding");
  queryGenerator("babies", "sleeptraining");
  queryGenerator("potty", "pottytraining");
  queryGenerator("tantrum", "behaviorissues");

  //Function to create the giphy api
  function giffyGenerator() {
    // var apiKey = "jTq2VUpNlJh6lKIV1wm104iuOC8FMnZg";
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=baby&api_key=jTq2VUpNlJh6lKIV1wm104iuOC8FMnZg";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // console.log(response)
      for (let index = 0; index < response.data.length; index++) {
        // console.log(response.data[index].images.fixed_height.url);
        var giffyImg = response.data[index].images.fixed_height.url;
        var humorImg = $("<img class='giphyImg'>");
        humorImg.attr("src", giffyImg);
        humorImg.attr("alt", "Humor");
        $("#one").prepend(humorImg);
      }
    });
  }

  giffyGenerator();
});
