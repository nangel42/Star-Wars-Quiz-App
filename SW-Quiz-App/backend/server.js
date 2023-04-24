/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const cors = require('cors')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const qCtrl = require('./controllers/questions')
// const appsCtrl = require('./controllers/applications')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app (app.set)
--------------------------------------------------------------- */


/* Middleware (app.use)
--------------------------------------------------------------- */
// cross origin allowance
app.use(cors())
// Body parser: used for POST/PUT/PATCH routes: 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


/* Mount routes
--------------------------------------------------------------- */
// When a GET request is sent to `/seed`, the pets collection is seeded
app.get('/api/seed', function (req, res) {
    // Remove any existing pets
    db.Question.deleteMany({})
        .then(removedQuestion => {
            console.log(`Removed ${removedQuestion.length} questions`)

            // Seed the pets collection with the seed data
            db.Question.insertMany(db.seedQuestions)
                .then(addedQuestions => {
                    console.log(`Added ${addedQuestions.length} questions to the database`)
                    res.json(addedQuestions)
                })
        })
});


// This tells our app to look at the `controllers/pets.js` file 
// to handle all routes that begin with `localhost:3000/pets`
app.use('/api/question', qCtrl)

// This tells our app to look at the `controllers/applications.js` file 
// to handle all routes that begin with `localhost:3000/applications`
        // app.use('/api/applications', appsCtrl)


// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});