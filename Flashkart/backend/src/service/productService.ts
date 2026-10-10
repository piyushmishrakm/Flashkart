import { Repository } from "typeorm";
import { Product } from "../entity/Product";

export class ProductService {
  constructor(private readonly productRepository: Repository<Product>) {}
  async findAll() {
    const users = await this.productRepository.find();
    return users;
  }
  async findOne(id: number) {
    const users = await this.productRepository.findOne({ where: { id } });
    return users;
  }

  async createProduct(product: Product) {
    const user = this.productRepository.create(product);
    await this.productRepository.save(user);
    return user;
  }

  async updateProduct(id: number, data: Partial<Product>) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (product) {
      this.productRepository.merge(product, data);
      await this.productRepository.save(product);
      return product;
    } else {
      return { message: "product not found" };
    }
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });

    if (product) {
      await this.productRepository.remove(product);
      return { message: "product Deleted successfully" };
    } else {
      return { message: "product not found" };
    }
  }

}