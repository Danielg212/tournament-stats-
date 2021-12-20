import mongoose from "mongoose";
import User from "./Users.js"
const userScoresSchema = mongoose.Schema({
    tournamentId: { type: String, required: true ,unique: true},
    stats: [
        {
            user: {type: mongoose.Schema.Types.ObjectId, ref: User},
            rank: String,
            _id: false,
        },
    ],
});
const modelName = "userScore";
export default mongoose.model(modelName, userScoresSchema);
