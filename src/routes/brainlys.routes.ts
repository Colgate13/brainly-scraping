import { Router } from 'express';
import BrainlysService from '../services/BrainlysService'


const accontRouter = Router();

accontRouter.post('/', async (request, response) => {
    const brainlysService = new BrainlysService();
    const { url } = request.body;

    const branlys = await brainlysService.scraping({
        url
    });
    return response.json(branlys);
});


export default accontRouter;