import SuccessPerQuestion from "../models/SuccessPerQuestion.js";
import UsersScores from "../models/UserScore.js";

export class StatisticsService {
    static fetchSuccessPerQuestion =  (tournamentId, callback) => {
         return  SuccessPerQuestion.findOne({tournamentId}, "-_id -__v -tournamentId",callback).exec();
    }

    static fetchUsersScores = (tournamentId, callback) => {
        return UsersScores.findOne({tournamentId}, "-_id -__v -tournamentId",callback)
            .populate({
                path: 'stats.user',
                // select: 'firstName lastName'
            }).exec()
    }
}
