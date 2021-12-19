import express from "express";
import {
  saveTournamentResults,
  getTournamentResults,
} from "../controllers/results.js";

import {fetchSuccessPerQuestion, fetchUsersScores} from "../controllers/statistics.js";
import {isValid} from "../middleware/validations.js";

// initialize router
const router = express.Router();

//stats
router.post("/saveTournamentResults", saveTournamentResults);
router.get("/getTournamentResults/:tournamentId",isValid, getTournamentResults);

//analytics
router.get("/fetchSuccessPerQuestion/:tournamentId",isValid, fetchSuccessPerQuestion);
router.get('/fetchUsersScores/:tournamentId',isValid, fetchUsersScores);
// router.get('/fetchTournamentStatistics/:tournamentId', requestRoom);

export default router;
