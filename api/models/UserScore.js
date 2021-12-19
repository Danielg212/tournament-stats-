import mongoose from "mongoose";

const userScoresSchema = mongoose.Schema({
    tournamentId: { type: String, required: true ,unique: true},
    stats: [
        {
            userId: Number,
            rank: String,
            _id: false,
        },
    ],
});
const modelName = "userScore";
export default mongoose.model(modelName, userScoresSchema);
