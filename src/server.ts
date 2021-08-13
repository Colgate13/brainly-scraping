import express from 'express'
import routes from './routes';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/', async (request, response) => {
    return response.json({
     message: `🐱‍👤> Server running! 🧛‍♀️ ${PORT}`,
    });

} );


app.listen(PORT, () => console.log(`🐱‍👤> Server running! 🧛‍♀️ ${PORT}`));
