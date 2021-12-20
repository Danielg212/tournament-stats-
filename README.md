# tournament-stats

## How to engage the app:

Well first I ought to tell you that there are 2 apps within this project:

- [Backend app](https://github.com/Danielg212/tournament-stats-/tree/master/api) has the database

In order to launch the development session, follow these instructions:

1. First download/clone this repository
2. Open a new terminal, and change directory (cd) to `/tournament-stats`
3. Run `npm install` to get all dependencies
4. Run `npm start` and the server should be running, connected to the database


## API HTTP routes

* Since we are using MongoDB the primary keys/Ids are type of [mongoose.Schema.Types.ObjectId](https://docs.mongodb.com/manual/reference/bson-types/#std-label-objectid)

#### Post `/saveTournamentResults`

###### body:

> {<br />
&nbsp;&nbsp;   startDate: { type: Date, required: true },<br />
&nbsp;&nbsp; endDateTime: { type: Date, required: true },<br />
&nbsp;&nbsp; results: [<br />
&nbsp;&nbsp; &nbsp;&nbsp; {<br />
&nbsp;&nbsp; &nbsp;&nbsp; userId:mongoose.Schema.Types.ObjectId,<br />
&nbsp;&nbsp; &nbsp;&nbsp; correctQuestions: [Number],<br />
&nbsp;&nbsp; &nbsp;&nbsp; incorrectQuestions: [Number],<br />
&nbsp;&nbsp; &nbsp;&nbsp; }
&nbsp;&nbsp; <br />
> &nbsp;&nbsp; ],<br />
}<br />

<br>

#### Get `/getTournamentResults`

###### params:

> :tournamentId === mongoose.Schema.Types.ObjectId

#### Get `/fetchSuccessPerQuestion`

###### params:

> :tournamentId === mongoose.Schema.Types.ObjectId


#### Get `/fetchUsersScores`

###### params:

> :tournamentId === mongoose.Schema.Types.ObjectId


#### Get `/fetchTournamentStatistics`

###### params:

> :tournamentId === mongoose.Schema.Types.ObjectId

P.S. You need the credentials for the `MONGO_URI` in order to connect to db.
