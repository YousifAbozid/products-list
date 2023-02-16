import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_DB_DEV,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = process.env

const pool = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB_DEV,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT ? parseInt(POSTGRES_PORT) : 5432,
})

export default pool
