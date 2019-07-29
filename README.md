# Liri Node App

### Use for App

Our liri node app is used to search up songs and/or movies and display the info in your own bash/terminal. This makes it so that you do not have to use the browser to get the details you need.

### How It Works

In order to use this app, we have three commands to be used:
1. `spotify-this-song`
2. `movie-this`
3. `do-what-it-says`
Each of these commands includes an unique argument to be used.

#### Spotify-this-song
You enter `node liri.js spotify-this-song your-song-here` into your terminal to get back the artist, song name, preview link, and album. This uses the Spotify API to retrieve the song information.

It looks like this:

![Image of spotify example](http://puu.sh/DYIR1/5c88d51820.png)

If a user forgets to enter a song name, it defaults to "The Sign" by Ace of Base.

#### Movie-this
You enter `node liri.js movie-this movie-name-here` into you terminal to get back several details of your movie. This uses axios to call from OMDB API to get its information.

It looks like this:

![Image of movie example](http://puu.sh/DYITl/aa441cc44d.png)

If a user forgets to enter a movie name, it defaults to "Mr. Nobody".

#### Do-what-it-says
This command reads text from a separate text file and can call either the Spotify command or Movie command and display the info. You enter `node liri.js do-what-it-says` and it uses the built-in `fs` npm.

It looks like this:

![Image of text file](http://puu.sh/DYIVO/bc2e0f0559.png)

To get this:

![Image of command](http://puu.sh/DYIWt/ab00d10096.png)


### Development

I created all the requests in order to retrieve the data from the APIs using promises. All npms were required at the beginning of the liri.js file and Node was used to run the functions.

### Repository link

Link to all files can be found at:
https://github.com/seanesqueda/liri-node-app