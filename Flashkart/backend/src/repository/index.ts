import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import {Product} from "../entity/Product"
import { UserService } from "../service/userService";
import { ProductService } from "../service/productService";


export const userRepository = new UserService(
  AppDataSource.getRepository(User)
);

export const productRepository = new ProductService(
   AppDataSource.getRepository(Product)
);