import {model, Schema} from "mongoose";
import {Egenders} from "../types/user.types.ts/user.types";

const userSchema = new Schema(
    {

        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: [true, "email is required"],
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        gender: {
            type: String,
            enum: Egenders,
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export const User = model("user", userSchema);
