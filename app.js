import Router from './sys/lib/router/router.js';
import HomeComponent from './com/home/home.controller.js';

import './sys/com/list/list.js'
import './sys/com/navigation-drawer/navigation-drawer.js'

new Router([
    { path: '', component: HomeComponent }
])