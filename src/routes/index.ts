import { Router } from 'express';
import brainlysRouter from './brainlys.routes'

const routes = Router();

routes.use('/brainly', brainlysRouter);


export default routes;