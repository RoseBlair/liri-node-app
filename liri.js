require("dotenv").config();
var request = require('request');
var keys = require("./keys.js");
require("moment");


//var spotify = new spotify(keys.spotify);

var input = (process.argv[2]);

var callConcert = function (artist) {
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
        var body = JSON.parse(body);
        if(error){
            console.log('error:', error); // Print the error if one occurred
        }
        
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        for (i=0; i< body.length; i++) {
           var concertInfo = body[i].venue.name + ", " + body[i].venue.city + ", " + body[i].venue.country + "\n" + body[i].datetime + "\n";
            console.log(concertInfo);
        };
        // console.log('body:', body); // Print the HTML for the Google homepage.

    });
}


switch (input) {
    case "concert-this":
        var artist = (process.argv[3]);
        callConcert(artist);
        break;
    case "spotify-this-song":
        console.log("song");
        break;
    case "movie-this":
        var moTitle = (process.argv[3]);
        callOmdb(moTitle);
        break;
    case "do-what-it-says":
        console.log("do it");
        break;
    default:
        console.log("Doesn't work")
       

    };

    

    function callOmdb (moTitle) {
        request("http://www.omdbapi.com/?apikey=" + keys.omdb.id + "&t=" + moTitle, function (error, response, body) {
            var body = JSON.parse(body);
            if(error){
                console.log('error:', error); // Print the error if one occurred
            }
            
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    var title = body.Title;
                    var year = body.year;
                    var ratings1 = body.ratings[0];
                    var ratings2 = body.ratings[1];
                    var country = body.country;
                    var actors = body.Actors;
                    var plot = body.Plot;
                    var language = body.language;
                    var movieInfo = "title: " + title + "\n" +
                        "year: " + year + "\n" +
                        "IMDB rating: " + ratings1 + "\n" +
                        "Rotten Tomato rating: " + ratings2 + "\n" +
                        "country: " + country + "\n" +
                        "actors: " + actors + "\n" +
                        "plot: " + plot + "\n" +
                        "language: " + language + "\n" +
                        
                 console.log();
             console.log('body:', body); // Print the HTML for the Google homepage.
    
        });
    }

    