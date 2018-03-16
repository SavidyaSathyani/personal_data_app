import Router from 'express';

const routes = new Router();

routes.get('/',()=>{
    res.send('Hello world');
});

export default routes;