import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
});
const modelName = "Users";
export default mongoose.model(modelName, UsersSchema);
