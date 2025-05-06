// env variables
import "dotenv/config"
import express from "express"
import config from "config";

const app = express();

// json mddleware
app.use(express.json());

// db
import db from "../config/db";

// app port
const port = config.get<number>("port");

// routes
import router from "./router";

// logger
import logger from "../config/logger";

// middleware
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware)
app.use("/api/", router);

app.listen(port, async () => {
  await db();
  logger.info(`Servidor rodando na porta: ${port}`);
});
