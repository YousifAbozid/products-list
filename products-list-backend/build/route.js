"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productController_1 = __importDefault(require("./productController"));
var productsRouter = express_1.default.Router();
var controller = new productController_1.default();
productsRouter.get('/', controller.getProducts);
productsRouter.post('/', controller.addProduct);
exports.default = productsRouter;
