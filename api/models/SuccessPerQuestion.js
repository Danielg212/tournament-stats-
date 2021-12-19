import mongoose from "mongoose";

const successRateSchema = mongoose.Schema({
  tournamentId: { type: String, required: true ,unique: true},
  stats: [
    {
      question: Number,
      successRate: Number,
        _id: false,
    },
  ],
});
const modelName = "successRate";
export default mongoose.model(modelName, successRateSchema);
