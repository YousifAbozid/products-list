import pool from './database'

export type Product = {
  id?: number
  name: string
  price?: number
}

export const ProductStore = {
  async index(): Promise<Product[]> {
    try {
      const conn = await pool.connect()
      const sql = 'SELECT * FROM products'
      const result = await pool.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Unable to get products: ${error}`)
    }
  },
}
