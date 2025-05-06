import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/movie";

// logger
import logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (e: any) {
        logger.error(`Erro no sistem:  ${e.message}`)
    }
}