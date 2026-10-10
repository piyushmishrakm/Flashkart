import { Request, Response } from "express";
import { productRepository } from "../repository";

export class ProductController {
  static async all(request: Request, response: Response) {
    const data = await productRepository.findAll();
    return response.status(200).send(data);
  }

  static async create(request: Request, response: Response) {
    const data = await productRepository.createProduct(request.body);
    return response.status(201).send(data);
  }

  static async findOne(request: Request, response: Response) {
    const id = Number(request.params.id);
    const data = await productRepository.findOne(id);
    return response.send(data);
  }

  static async update(request: Request, response: Response) {
    const id = Number(request.params.id);
    const data = await productRepository.updateProduct(id, request.body);
    return response.send(data);
  }

  static async delete(request: Request, response: Response) {
    const id = Number(request.params.id);
    const data = await productRepository.delete(id);
    return response.send(data);
  }
}