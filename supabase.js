import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Khởi tạo Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

// API để lấy dữ liệu từ Supabase
app.get("/data", async (req, res) => {
    const { data, error } = await supabase.from("Product").select("*");
    if (error) {
        res.status(400).json({ error: error.message });
    } else {
        res.json(data);
    }
});

// API để thêm dữ liệu vào Supabase
app.post("/data", async (req, res) => {
    const { data, error } = await supabase
        .from("Product")
        .insert(req.body)
        .select();

    if (error) {
        console.error("Error inserting data:", error);
        res.status(400).json({ error: error.message });
    } else {
        res.json(data);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
