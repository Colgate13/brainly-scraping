import express from 'express'
import routes from './routes';

const PORT = 8000;

const app = express();


app.use(express.json());

app.use(routes);

app.get('/', async (request, response) => {
    return response.json({
     message: `🐱‍👤> Server running! 🧛‍♀️ ${PORT}`,
    });

} );


app.listen(PORT, () => console.log(`🐱‍👤> Server running! 🧛‍♀️ ${PORT}`));
