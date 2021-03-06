import Koa from 'koa';

import router from './router';
import middleware from './middleware';

const app = new Koa();

middleware(app);
router(app);

app.listen(3000, () => {
    console.log('server is running at http://127.0.0.1:3000')
})