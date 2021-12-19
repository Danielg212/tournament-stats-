import SuccessPerQuestion from "../models/SuccessPerQuestion.js";
import UsersScores from "../models/UserScore.js";

const fetchSuccessPerQuestion = async (request, response) => {
  const tournamentId = request.params.tournamentId;
  try {
    const stats = await SuccessPerQuestion.findOne(
        {
          tournamentId: tournamentId,
        },
        "-_id -__v"
    );
    if (!stats) {
      response.status(404).json({
        message: "Success per question id not found",
        id: tournamentId,
      });
    } else {
      response.status(200).json({ stats });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }

};

const fetchUsersScores = async (request, response) => {
  const tournamentId = request.params.tournamentId;
  try {
    const stats = await UsersScores.findOne(
        {
          tournamentId: tournamentId,
        },
        "-_id -__v"
    )
    if (!stats) {
      response.status(404).json({
        message: "Users score's Id not found",
        id: tournamentId,
      });
    } else {
      response.status(200).json({ stats });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }

};

export { fetchSuccessPerQuestion ,fetchUsersScores };
