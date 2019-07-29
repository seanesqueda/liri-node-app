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

if (command === "spotify-this-song") {
    if (!name) {
        name = "The Sign"
        spotify
            .search({ type: 'track', query: name })
            .then(function (response) {
                var song = response.tracks.items[2];
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
                var song = response.tracks.items[0];
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
    if (!name) {
        name = "Mr. Nobody"
        axios.get("http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            var movie = response.data;
            var movieData = [
                "Title: " + movie.Title,
                "Release Year: " + movie.Year,
                "IMDB Rating: " + movie.imdbRating,
                "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                "Location Produced: " + movie.Country,
                "Language: " + movie.Language,
                "Synopsis: " + movie.Plot,
                "Starring: " + movie.Actors
            ].join("\n\n");
            console.log(movieData);
        });
    }
    else {
        axios.get("http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            var movie = response.data;
            var movieData = [
                "Title: " + movie.Title,
                "Release Year: " + movie.Year,
                "IMDB Rating: " + movie.imdbRating,
                "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                "Location Produced: " + movie.Country,
                "Language: " + movie.Language,
                "Synopsis: " + movie.Plot,
                "Starring: " + movie.Actors
            ].join("\n\n");
            console.log(movieData);
        });
    }
}
else if (command === "do-what-it-says") {

}
else {
    console.log("Invalid command");
}