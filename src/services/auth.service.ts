import { ApiError } from "../errors/api.error";
import { User } from "../models/User.model";
import { IUser } from "../types/user.types.ts/user.types";
import { passwordService } from "./password.service";

class AuthService {
  public async register(body: IUser): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(body.password);

      await User.create({ ...body, password: hashedPassword });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
