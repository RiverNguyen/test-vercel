import { StatusCodes } from "http-status-codes";
import { Worker } from "../models/worker.js";

export const getAll = async (req, res) => {
    try {
        const workers = await Worker.find({});
        return res.status(StatusCodes.OK).json({ workers });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getOne = async (req, res) => {
    try {
        const worker = await Worker.findById(req.params.id);
        return res.status(StatusCodes.OK).json({ worker });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const create = async (req, res) => {
    try {
        const worker = await Worker.create(req.body);
        return res.status(StatusCodes.CREATED).json({ worker });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const update = async (req, res) => {
    try {
        const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(StatusCodes.OK).json({ worker });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const remove = async (req, res) => {
    try {
        const worker = await Worker.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json({ worker });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};
