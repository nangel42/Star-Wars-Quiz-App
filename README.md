# Star-Wars-Quiz-App
By: Nicolas Angel
<p align="center"><img src="frontend/src/assets/DarthVader.gif" /></p>


# Link to "Star Trivia!"
<a href="https://star-wars-trivia-game.herokuapp.com/">Click Here!</a>


# Project Description

Looking for a fun and engaging way to test your knowledge of the Star Wars universe? Look no further than "Star Trivia!" - a MERN stack app that lets you choose your own questions and provides pre-selected ones for all ages to enjoy.

Using data stored in MONGODB, "Star Trivia!" offers a customizable trivia experience, while also providing a study page powered by SWAPI, an open source Star Wars API. With access to information on Films, Characters, Species, and more, users can immerse themselves in the Star Wars world and hone their skills.

Whether you're a die-hard Star Wars fan or just looking for a fun way to pass the time, "Star Trivia!" is the perfect app for you. So why wait? Try it out today and see how much you really know about a galaxy far, far away!


# Installation Instructions

* Clone this repo down to your local machine!
* Make an `.env` File and add a mongoDB connection
* Run the following in the terminal...
```
npm i
```
* Then run the following command to launch it from a local server... 
```
npm run start
```
* In a browser, open what ever port was specified in the terminal and feel free to browse "Star Trivia!"


# How to Browse "Star Trivia!"

DISCLAIMER: "Star Trivia!" is a work on progress, it will be updated and these pictures may be outdated!

This is the Home page, feel free to click any buttons to browse.
<p align="center"><img src="frontend/src/assets/Star-Trivia-Homepage.png" height = "80%" width = "80%"/></p>

This is the Quiz page, where the main quiz will be taken.
<p align="center"><img src="frontend/src/assets/Star-Trivia-Quizpage.png" height = "80%" width = "80%"/></p>

This is the Create a question page.
<p align="center"><img src="frontend/src/assets/Star-Trivia-Createpage.png" height = "80%" width = "80%"/></p>

And finally, this is the More information page, powered by SWAPI.
<p align="center"><img src="frontend/src/assets/Star-Trivia-Moreinfopage.png" height = "80%" width = "80%"/></p>


# Technology Used

* ANT Design
* Mongoose
* MongoDB
* Express.js
* React.js
* Node.js
* axios
* Vite


<!-- # User Stories

* As a Customer, I want to play a trivia game, so that I can have a fun activity to play.

* As an Potential Employer, I want to see what this MERN stack file has functionality wise, so that I can decide if he has the skills the company is looking for.

* As a Colleague, I want to see the improvement of my colleague, that way I can view his progress at the end of the course. -->


# Wireframes

These were my proposed Wireframes for "Star Trivia!". They include features I would like to add and a basic layout of what the app would look like.

This is the Home page.
<p align="center"><img src="frontend/src/assets/Star-Trivia-WF1.png" height = "80%" width = "80%"/></p>

This is the Question page with the basic question layout.
<p align="center"><img src="frontend/src/assets/Star-Trivia-WF2.png" height = "80%" width = "80%"/></p>

This is the Question Result page shown after the quiz is done.
<p align="center"><img src="frontend/src/assets/Star-Trivia-WF3.png" height = "80%" width = "80%"/></p>

This is the More Info page showing results from SWAPI.
<p align="center"><img src="frontend/src/assets/Star-Trivia-WF4.png" height = "80%" width = "80%"/></p>


# Major Hurdles

* Heroku. I am still getting used to Heroku and how it works. It is very tedious and I dont quite understand it all, but I sure I will one day!
* React. React was a little challenging for me. It is very nice to use vite and it tells you where issues lie, but React is still new to me and I will have to keep working with it to understand.
* Questions CRUD. I currently have a bug where I cant get the questions to appear with the seeded questions and it might be because of ANT design or it might be because I am doing something wrong. Not 100% but still need to diagnose that problem.
* SWAPI API. With the starships and vehicles part not working correctly, I am not sure I will be able to implement those into my project, but I want more time to look into it.


# Next Steps

I plan on implementing a few new steps...
* Unfortunately, while SWAPI was an awesome API to use, it does not include pictures NOR is it being worked on anymore. I want to integrate the Pipedream Photos API side by side with SWAPI that way all information points can have photos to go along with the data.
* I want to Paginate the More information area.
* Some more design features, One specifically is adding the gif at the top of the page to be the first thing you see when you launch the site!
* Add more questions.
* Adding the classic Star Wars crawl text! This is a must and I will be working towards getting it to work.
* Adding authentication for High Score Tracking


# Credits

**Nicolas Angel**

* Links:

  <p align="left">
  	<a target="_blank" rel="noopener noreferrer" href="https://github.com/nangel42"><img src= "frontend/src/assets/GitHub-logo-white.png" width="100" height="auto"/></a> 
  	<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicolasangel/"><img src="frontend/src/assets/linkedin.png" width="55" height="auto"/></a> 
  	<a target="_blank" rel="noopener noreferrer" href="https://nangel42.github.io/Nicolas-Angel-Portfolio/"><img src="frontend/src/assets/website-white.png" width="60" height="auto"/></a> 
  </p>
