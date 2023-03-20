export interface IError extends Error {
  status: number;
}

export interface IMessage {
  message: string;
}

export interface IIndex {
  // eslint-disable-next-line
  [index: string]: any;
}

export type IRequest = IIndex;
