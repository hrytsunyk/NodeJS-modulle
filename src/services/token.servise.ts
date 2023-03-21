import * as jwt from "jsonwebtoken";

import { tokenConstants } from "../constants/token.constants";
import { ITokenPayload } from "../types/token.interface";
class TokenServise {
  public generateTokenPair(payload: ITokenPayload) {
    const accessToken = jwt.sign(payload, tokenConstants.ACCESS_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, tokenConstants.REFRESH_SECRET, {
      expiresIn: "15d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export const tokenService = new TokenServise();
