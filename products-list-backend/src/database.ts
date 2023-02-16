import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { POSTGRES_HOST, POSTGRES_DB_DEV, POSTGRES_USER, POSTGRES_PASSWORD } =
  process.env

const pool = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB_DEV,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
})

export default pool
