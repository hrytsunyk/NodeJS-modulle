export const regexConstants: { [key: string]: RegExp } = {
  EMAIL: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};
