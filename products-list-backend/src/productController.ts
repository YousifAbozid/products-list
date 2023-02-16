import express from 'express'
import { ProductStore } from './productModel'

const store = new ProductStore()

export default class ProductController {
  async getProducts(_req: express.Request, res: express.Response) {
    try {
      const products = await store.index()
      res.json(products)
    } catch (error) {
      res.status(404).json({ error: `Could not get products. ${error}` })
    }
  }
}
