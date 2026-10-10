"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const repository_1 = require("../repository");
class ProductController {
    static async all(request, response) {
        const data = await repository_1.productRepository.findAll();
        return response.status(200).send(data);
    }
    static async create(request, response) {
        const data = await repository_1.productRepository.createProduct(request.body);
        return response.status(201).send(data);
    }
    static async findOne(request, response) {
        const id = Number(request.params.id);
        const data = await repository_1.productRepository.findOne(id);
        return response.send(data);
    }
    static async update(request, response) {
        const id = Number(request.params.id);
        const data = await repository_1.productRepository.updateProduct(id, request.body);
        return response.send(data);
    }
    static async delete(request, response) {
        const id = Number(request.params.id);
        const data = await repository_1.productRepository.delete(id);
        return response.send(data);
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map