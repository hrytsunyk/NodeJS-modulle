export enum Egenders {
  male = "male",
  female = "female",
  mixed = "mixed",
}

export interface IUser {
  name: string;
  age: number;
  gender: string;
  email: string;
  password: string;
}
