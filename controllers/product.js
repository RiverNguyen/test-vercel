export const getAllProduct = (req, res) => {
    try {
        res.send("Get all product");
    } catch (error) {
        console.log(error);
    }
};
