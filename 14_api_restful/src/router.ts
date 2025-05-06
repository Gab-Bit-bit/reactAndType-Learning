import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers"; // com chaves

const router = Router();

export default router.get("/teste", (req: Request, res: Response) => {
  res.status(200).send("API WORKING!");
});

router.post("/movie", createMovie);
