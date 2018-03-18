import express from'express';
import routes from './routes';
import Logger from './helpers/logger';

const app = express();

//specify static path
app.use(express.static(`${__dirname}/public`));

//get routes
app.use(routes);

app.listen(3000,()=>{
    Logger.log('Started Server on http://localhost:3000/', 'INFO');
});