import { ApiError } from "../errors/api.error";
import { User } from "../models/User.model";
import { ICredentials } from "../types/auth.types";
import { ITokenPair } from "../types/token.interface";
import { IUser } from "../types/user.types.ts/user.types";
import { passwordService } from "./password.service";
import { tokenService } from "./token.servise";

class AuthService {
  public async register(body: IUser): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(body.password);

      await User.create({ ...body, password: hashedPassword });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async login(
    credentials: ICredentials,
    user: IUser
  ): Promise<ITokenPair> {
    try {
      const isMatched = await passwordService.compare(
        credentials.password,
        user.password
      );

      if (!isMatched) {
        throw new ApiError("Invalid email or password", 400);
      }

      const tokenPair = tokenService.generateTikenPair({
        name: user.name,
        id: user._id,
      });
      return tokenPair;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
