import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export default app;

