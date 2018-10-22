require("dotenv").config();
var request = require('request');
var spotify = require("./keys.js");
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
        console.log("fucking song");
        break;
    case "movie-this":
        console.log("fucking movie");
        break;
    case "do-what-it-says":
        console.log("fucking do it");
        break;
    default:
        console.log("Doesn't work")
       

    };