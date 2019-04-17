import Router from './system/core/router/router.js'

import DashboardModule from './modules/dashboard/dashboard.module.js'
import HomeComponent from './modules/dashboard/components/home/home.component.js'

new Router([
    { component: DashboardModule, path: '', children: [
        { component: HomeComponent, path: '' },
        { component: HomeComponent, path: 'home' },
    ]},
])

/* 
    
*/