import Router from './sys/lib/router/router.js';
import HomeController from './com/home/home.controller.js';

new Router([
    { path: '', component: HomeController }
])

/**
 * app
 *  /index.html
 *  /app.js
 *  com
 *      /home
 *          /home.controller.js
 *          /home.model.js
 *          /home.view.js
 */