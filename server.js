import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8105;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/lastfm-callback', (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).send('Token is missing!');
    }
    // Handle the token, perhaps save it, use it to fetch an access token, etc.
    res.send('Last.fm authentication successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
