
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/github.strategy');

// Route includes
const challengeRouter = require('./routes/challenge.router');
const authRouter = require('./routes/auth.router.js');
const dashboardRouter = require('./routes/dashboard.router');
const scheduler = require('./routes/scheduler.router')
const GHAPIRouter = require('./routes/gh-api.router');
const leaderboardRouter = require('./routes/leaderboard.router');
//const rossRouter = require('./routes/ross.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/auth', authRouter);
app.use('/api/challenge', challengeRouter);
app.use('/api/dashboard', dashboardRouter);
app.use(GHAPIRouter);
app.use(scheduler);
app.use('/api/leaderboard', leaderboardRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

console.log(new Date());


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening *** on port: ${PORT}`);
});
