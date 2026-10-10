"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controller/ProductController");
const productRouter = (0, express_1.Router)();
productRouter.get("/product", ProductController_1.ProductController.all);
productRouter.post("/product", ProductController_1.ProductController.create);
productRouter.get("/product/:id", ProductController_1.ProductController.findOne);
productRouter.put("/product/:id", ProductController_1.ProductController.update);
productRouter.delete("/product/:id", ProductController_1.ProductController.delete);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map