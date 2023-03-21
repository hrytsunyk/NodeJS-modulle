import {config} from "dotenv";

config();
export const tokenConstants = {
    ACCESS_SECRET: process.env.JWT_ACCESS,
    REFRESH_SECRET: process.env.JWT_REFRESH,
}