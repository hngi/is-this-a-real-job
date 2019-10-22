import mongoose from "mongoose";
const { Schema } = mongoose;

const UserModelSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

export default mongoose.model("UserModel", UserModelSchema);
