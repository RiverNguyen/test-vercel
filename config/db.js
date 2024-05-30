import mongoose from "mongoose";

export default connect = async (uri) => {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
};
