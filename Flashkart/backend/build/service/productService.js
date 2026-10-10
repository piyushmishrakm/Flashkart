"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async findAll() {
        const users = await this.productRepository.find();
        return users;
    }
    async findOne(id) {
        const users = await this.productRepository.findOne({ where: { id } });
        return users;
    }
    async createProduct(product) {
        const user = this.productRepository.create(product);
        await this.productRepository.save(user);
        return user;
    }
    async updateProduct(id, data) {
        const product = await this.productRepository.findOne({ where: { id } });
        if (product) {
            this.productRepository.merge(product, data);
            await this.productRepository.save(product);
            return product;
        }
        else {
            return { message: "product not found" };
        }
    }
    async delete(id) {
        const product = await this.productRepository.findOne({ where: { id } });
        if (product) {
            await this.productRepository.remove(product);
            return { message: "product Deleted successfully" };
        }
        else {
            return { message: "product not found" };
        }
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map