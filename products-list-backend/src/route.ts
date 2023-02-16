import express from 'express'
import ProductController from './productController'

const productsRouter = express.Router()
const controller = new ProductController()

productsRouter.get('/', controller.getProducts)

export default productsRouter
