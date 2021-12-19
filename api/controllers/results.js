import Tournament from "../models/Tournament.js";
import SuccessRate from "../models/SuccessPerQuestion.js";
import UserScore from "../models/UserScore.js";
import {calculateSuccessRate, toLetterScore} from "../utils/utils.js";

const saveTournamentResults = async (request, response) => {
    try {
        const tournament = new Tournament(request.body);
        await tournament.save();

        const successRateStats = calculateSuccessRate(request.body.results);
        const successRate = new SuccessRate({tournamentId: tournament._id, stats: successRateStats});
        await successRate.save()

        const normalizeUsersScores = request.body.results.map((item) => {
            const successRate = (item.correctQuestions.length / 10) * 100
            const letterScore = toLetterScore(successRate);
            return {userId: item.userId, rank: letterScore}
        });

        const usersScore = new UserScore({tournamentId: tournament._id, stats: normalizeUsersScores})
        await usersScore.save()

        response.status(200).json({
            message: "Tournament saved",
            TournamentID: tournament.id,
        });
    } catch (e) {
        console.log(e.message);
        response.status(500).json(e.message);
    }
};
const getTournamentResults = async (request, response, next) => {
    const tournamentId = request.params.tournamentId;
    try {
        const tournament = await Tournament.findOne(
            {
                _id: tournamentId,
            },
            "-_id -__v"
        );
        if (!tournament) {
            response.status(404).json({
                message: "tournament not found",
                id: tournamentId,
            });
        } else {
            response.status(200).json({tournamentId: tournament._id, tournament});
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).json(error.message);
    }
};

export {saveTournamentResults, getTournamentResults};
