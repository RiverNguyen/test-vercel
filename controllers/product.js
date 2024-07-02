import { StatusCodes } from "http-status-codes";
import Product from "../models/product.js";

export const getAll = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        return res.status(StatusCodes.OK).json(products);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(StatusCodes.CREATED).json({ product });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(StatusCodes.OK).json(product);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        ).exec();
        return res.status(StatusCodes.OK).json({ product });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json({ product });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};
