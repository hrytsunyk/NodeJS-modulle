import * as Joi from "joi";

import { regexConstants } from "../constants";
import { Egenders } from "../types/user.types.ts/user.types";

export class UserValidators {
  private static firstName = Joi.string().min(2).max(50).trim();
  private static email = Joi.string()
    .regex(regexConstants.EMAIL)
    .lowercase()
    .trim();

  private static password = Joi.string()
    .regex(regexConstants.PASSWORD)
    .required();
  private static gender = Joi.valid(...Object.values(Egenders));
  private static age = Joi.number().min(18).max(100);

  static createUser = Joi.object({
    name: this.firstName.required(),
    email: this.email.required(),
    password: this.password.required(),
    gender: this.gender.required(),
    age: this.age.required(),
  });
  static updateUser = Joi.object({
    name: this.firstName,
    gender: this.gender,
  });

  static loginUser = Joi.object({
  email: this.email.required(),
    password: this.password.required()
  })
}
