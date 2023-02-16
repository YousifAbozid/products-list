"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1.default)();
dotenv_1.default.config();
var port = process.env.PORT || 3001;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send('Server is running');
});
app.listen(port, function () {
    console.log("Server running on port ".concat(port, " \nClick on the link to visit it ==> (http://localhost:").concat(port, ")"));
});
