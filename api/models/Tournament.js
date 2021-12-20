import mongoose from "mongoose";
import User from "./Users.js";

const tournamentSchema = mongoose.Schema({
  startDate: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  results: [
    {
      _id: false,
      userId:  {type: mongoose.Schema.Types.ObjectId, ref: User},
      correctQuestions: [Number],
      incorrectQuestions: [Number],
    },
  ],
});
const modelName = "Tournament";
export default mongoose.model(modelName, tournamentSchema);
