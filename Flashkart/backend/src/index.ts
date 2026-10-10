import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import userRouter from "./router/userRouter";
import productRouter from "./router/userRouter";
const pino = require('pino');
const logger = pino();

logger.info('Welcome to Flashkart application');
AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use("/api", userRouter);
    app.use("/api/product", productRouter);
    app.listen(3000);

    console.log("Express server has started on port 3000.");
  })
  .catch((error) => console.log(error));