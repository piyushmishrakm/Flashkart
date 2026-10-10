import { Router } from "express";
import { ProductController } from "../controller/ProductController";

const productRouter = Router();
productRouter.get("/product", ProductController.all);
productRouter.post("/product", ProductController.create);
productRouter.get("/product/:id", ProductController.findOne);
productRouter.put("/product/:id", ProductController.update);
productRouter.delete("/product/:id", ProductController.delete);

export default productRouter;