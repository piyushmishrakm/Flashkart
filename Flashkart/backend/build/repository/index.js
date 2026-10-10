"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = exports.userRepository = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../entity/User");
const Product_1 = require("../entity/Product");
const userService_1 = require("../service/userService");
const productService_1 = require("../service/productService");
exports.userRepository = new userService_1.UserService(data_source_1.AppDataSource.getRepository(User_1.User));
exports.productRepository = new productService_1.ProductService(data_source_1.AppDataSource.getRepository(Product_1.Product));
//# sourceMappingURL=index.js.map