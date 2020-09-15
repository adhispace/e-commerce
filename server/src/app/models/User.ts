import { Schema, model } from "mongoose";
import { genSalt, hash } from "bcryptjs";
let UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 12,
  },
  mobile: {
    type: String,
    trim: true,
    required: true,
  },
  dob: {
    type: Date,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    required: true,
    default: "User",
  },
});

//  Password encryption using bcryptjs
UserSchema.pre("save", function (next) {
  const user: any = this;

  if (user.isModified("password")) {
    const saltRound = 10;

    genSalt(saltRound, (err, salt) => {
      hash(user.password, salt, (err, hash: any) => {
        if (err) {
          throw err;
        } else {
          user.password = hash;
          next();
        }
      });
    });
  } else {
    next();
  }
});

export const User = model("User", UserSchema);
