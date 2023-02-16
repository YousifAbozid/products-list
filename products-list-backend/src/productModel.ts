// @ts-ignore
import pool from './database'

export type Product = {
  id?: number
  name: string
  price?: number
}

export class ProductStore {
  // Get all products
  async index(): Promise<Product[]> {
    try {
      // @ts-ignore
      const conn = await pool.connect()
      const sql = 'SELECT * FROM products'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Could not get products. Error: ${error}`)
    }
  }
}
