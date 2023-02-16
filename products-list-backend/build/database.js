"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB_DEV = _a.POSTGRES_DB_DEV, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_PORT = _a.POSTGRES_PORT;
var pool = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB_DEV,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRES_PORT ? parseInt(POSTGRES_PORT) : 5432,
});
exports.default = pool;
