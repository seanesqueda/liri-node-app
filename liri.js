//Initalize all npms needed
require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");

var fs = require("fs");
var keys = require("./keys.js");

//Create spotify object with API keys
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var name = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------------\n\n";

if (command === "spotify-this-song") {
    if (!name) {
        name = "The Sign by Ace of Base"
        spotify
            .search({ type: 'track', query: name })
            .then(function (response) {
                var song = response.tracks.items[1];
                var songData = [
                    "Artist: " + song.artists[0].name,
                    "Song Name: " + song.name,
                    "Preview Link: " + song.preview_url,
                    "Album: " + song.album.name
                ].join("\n\n");
                console.log(songData);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    else {
        spotify
            .search({ type: 'track', query: name })
            .then(function (response) {
                var song = response.tracks.items[1];
                var songData = [
                    "Artist: " + song.artists[0].name,
                    "Song Name: " + song.name,
                    "Preview Link: " + song.preview_url,
                    "Album: " + song.album.name
                ].join("\n\n");
                console.log(songData);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
else if (command === "movie-this") {

}
else if (command === "do-what-it-says") {

}
else {
    console.log("Invalid command");
}