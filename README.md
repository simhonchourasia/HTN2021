# HTN2021
Hack the North 2021 Project

# What it does
In our React web app, the user enters the name of an album and artist. We send that information to our machine learning algorithms and it generates an album cover and a list of track names to match.

# How we built it
First, we created the two machine learning models and saved their parameters into files. For the album cover generation model, we used multiple models from different points in the training process for more variety. These models were then used by the Flask backend to be used in the API calls, so that the React frontend could request album covers and song titles to be generated.

# Challenges we ran into
For the album cover generation model, many of the training runs either produced very segmented-looking images, or devolved into being a single colour. We found that we needed to increase the complexity of the GAN model by adding more layers to both the generator and discriminator, as well as train the model for more epochs. Some steps of creating the song-lyrics generator presented a challenge to me as I built it up. First, finding an appropriate dataset that would be representative of song title data in general was crucial step. Such datasets were surprisingly hard to come by, considering that our 36 hour time constraint set a ceiling for the final number of data entries I could analyze. However, I was able to wrangle a dataset of songs in Spotify's catalogue that I found to create a representative sample of the broader dataset.

# Accomplishments that we're proud of
In just 36 hours, we managed to create two different complex machine learning algorithms. Given the time required to train models, this was quite an impressive feat. Overall, we’re all proud of the fact that we produced a fully functional project within the deadline. While there’s still a lot that can be done, we have a solid foundation we can build upon.

# What's next for Industry Baby
One step we could take to improve the album cover generation is to increase the resolution of the images being generated (and subsequently the complexity of the network). This would require much more time to train, but would give better looking results.

# Built With
- flask
- numpy
- pandas
- python
- react
- teras
