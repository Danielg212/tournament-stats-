import {StatisticsService} from "../services/statisticsService.js";

const fetchSuccessPerQuestion = async (request, response) => {
  const tournamentId = request.params.tournamentId;
  await StatisticsService.fetchSuccessPerQuestion(tournamentId,(error, result) => {
      if (error) {
          console.log(error.message);
          response.status(500).json(error.message);
      }
      if (!result) {
          response.status(404).json({
              message: "question id not found!",
              id: tournamentId,
          });
      } else {
          response.status(200).json({result});
      }
  })

};

const fetchUsersScores = async (request, response) => {
  const tournamentId = request.params.tournamentId;
  await StatisticsService.fetchUsersScores(tournamentId,(error, result) => {
      if (error) {
          console.log(error.message);
          response.status(500).json(error.message);
      }
      if (!result) {
          response.status(404).json({
              message: "Users score's Id not found",
              id: tournamentId,
          });
      } else {
          response.status(200).json({ result });
      }

  })

};

const fetchTournamentStatistics  = async (request, response) => {
    const tournamentId = request.params.tournamentId;
    try {
        const usersScores = await StatisticsService.fetchUsersScores(tournamentId)
        const questionsRate = await StatisticsService.fetchSuccessPerQuestion(tournamentId);
        response.status(200).json({ usersScores,questionsRate });
    }catch (e) {
        console.error(e.message)
        response.status(500).json(e.message);
    }


}

export { fetchSuccessPerQuestion ,fetchUsersScores,fetchTournamentStatistics };
