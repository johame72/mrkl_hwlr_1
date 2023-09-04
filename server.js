import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8105;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
