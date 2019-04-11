import Router from './sys/lib/router/router.js';
import HomeComponent from './com/home/home.component.js';

new Router([
    { path: '', component: HomeComponent }
])