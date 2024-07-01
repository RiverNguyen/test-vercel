import e from "express";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        images: [
            {
                type: String,
                default: [],
            },
        ],
        price: {
            type: Number,
            required: true,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Product", productSchema);
