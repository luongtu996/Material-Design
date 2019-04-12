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
 *      /index.html (403)
 *      /home
 *          /home.controller.js
 *          /home.model.js
 *          /home.view.js
 *          /index.html (403)
 *  sys
 *      /index.html (403)
 *      /com
 *          /index.html (403)
 *          /...
 *      /lib
 *          /index.html (403)
 *          /router
 *          /element
 */