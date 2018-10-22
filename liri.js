require("dotenv").config();
var request = require('request');
var spotify = require("./keys.js");

//var spotify = new spotify(keys.spotify);

var input = (process.argv[2]);

var callConcert = function () {

    "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`

    request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
}






switch (input) {
    case "concert-this":
        callConcert();
        console.log("fucking concert access API");
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