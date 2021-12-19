import mongoose from "mongoose";

const tournamentSchema = mongoose.Schema({
  startDate: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  results: [
    {
      _id: false,
      userId: Number,
      correctQuestions: [Number],
      incorrectQuestions: [Number],
    },
  ],
  //   users: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }], //TODO לדחוף פה הכל בתור התחלה
});
const modelName = "Tournament";
export default mongoose.model(modelName, tournamentSchema);
