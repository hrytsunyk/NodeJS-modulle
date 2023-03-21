import * as jwt from "jsonwebtoken";

import { ITokenPayload } from "../types/token.interface";
class TokenServise {
  public generateTokenPair(payload: ITokenPayload) {
    const accessToken = jwt.sign(payload, "JWT_ACCESS", { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, "JWT_REFRESH", { expiresIn: "15d" });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export const tokenService = new TokenServise();
