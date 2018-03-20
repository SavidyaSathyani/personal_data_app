import express from 'express';
import routes from './routes';
import Logger from './helpers/logger';
import allowCrossDomain from './middleware/request-header'

const app = express();

//Enable CORS
app.use(allowCrossDomain);

//set the static path
app.use(express.static(`${__dirname}/public`));

//get routes
app.use(routes);

app.listen(3000, () => {
    Logger.log('Started Server on http://localhost:3000/', 'INFO');
});