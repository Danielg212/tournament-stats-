import mongoose from "mongoose";

export const isValid = (request, response, next) => {
    const tournamentId = request.params.tournamentId;
    const idIsValid = mongoose.Types.ObjectId.isValid(tournamentId);
    if (idIsValid) {
        next()
    } else {
        response.status(404).json({
            message: "invalid id!",
            id: tournamentId,
        });
    }
};
