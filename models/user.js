const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exist"],
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["applicant", "super-admin", "sesd-staff", "committee"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
