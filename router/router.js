let hash = window.location.hash = '/path4/path4/path4/';

let pathRegExp = (path) => new RegExp(
    path
        .replace(/:(\w+)/g, '([^\/]+)')
        .replace(/\*/g, '(?:.*)')
    + '(?:$)'
);

let route = {
    path: undefined,
    // pathName: '',
    // pathRender: 0,
    component: undefined,
    children: [],
    access: true,
    accessChild: true,
};

let routesMap = (routes, pathName = '', pathRender = 0, accessChild) => routes.reduce((acc, value) => {
    value.pathName = `${pathName}/${value.path}`.replace(/\/\//, '/');
    // value.pathName = `${pathName}/${value.path}`.slice(1);
    value.pathRender = pathRender;
    value.access = accessChild;
    acc = acc.concat(Object.assign({}, route, value));
    
    if (value.children) {
        acc = acc.concat(routesMap(value.children, `${pathName}/${value.path}`, pathRender + 1, value.accessChild));
    }

    return acc;
}, []);

let hashMatch = (hash, path) => {
    let matches = hash.match(pathRegExp(path));

    if (matches && matches.index == 0) {
        return matches;
    }

    return false;
};

let routeMatch = (routes, hash) => routesMap(routes).find(value => hashMatch(hash, value.pathName));

let hashMap = hash.split('/').map((value, index, array) => {
    let hashPath = array.slice(0, index);
    hashPath.push(value === '' ? '/' : value);
    return hashPath.join('/');
});

hashMap.map(console.log);

class RouterElement extends HTMLElement { }
customElements.define('md-router', RouterElement);

let HomeComponent = `<div><h1>HomeComponent</h1><md-router></md-router><div>`;
let DashboardComponent = `<div><h1>DashboardComponent</h1><md-router></md-router><div>`;
let Path1Component = `<div><h1>Path1Component</h1><div>`;
let Path3Component = `<div><h1>Path3Component</h1><md-router></md-router><div>`;
let Path2Component = `<div><h1>Path2Component</h1><md-router></md-router><div>`;
let Path4Component = `<div><h1>Path4Component</h1><md-router></md-router><div>`;
let Path21Component = `<div><h1>Path21Component</h1><div>`;
let PageNotFoundComponent = `<div><h1>PageNotFoundComponent</h1><div>`;

class AccessAuth {
    constructor() {}
    get accessible() {
        // window.location.hash = '/login'
        return true;
    }
};

let auth = (new AccessAuth()).accessible;

console.log(auth, typeof auth)

let routes = [
    {
        path: '', component: HomeComponent, children: [
            // { path: '', component: DashboardComponent },
            { path: 'path1', access: auth, component: Path1Component },
            {
                path: 'path2', access: auth, accessChild: auth, component: Path2Component, children: [
                    { path: '', component: Path21Component },
                    { path: ':id', component: Path21Component }
                ]
            },
            { path: 'path3/:id/:text', component: Path3Component },
            {
                path: 'path4', component: Path4Component, access: auth, accessChild: auth, children: [
                    { path: 'path1' },
                    { path: 'path2' },
                    { path: 'path3' },
                    {
                        path: 'path4', component: Path4Component, access: auth, accessChild: auth, children: [
                            { path: 'path1' },
                            { path: 'path2' },
                            { path: 'path3' },
                            { path: 'path4', component: Path4Component }
                        ]
                    }
                ]
            },
            { path: '*', component: PageNotFoundComponent }
        ]
    },
    { path: '*', component: PageNotFoundComponent }
];

routesMap(routes).map((value) => console.log(value));

hashMap.map(value => {
    let matches = routeMatch(routes, value);
    let routerElement = document.querySelectorAll('md-router');
    let routerElementNextSibling = routerElement[matches.pathRender].nextSibling;

    if (matches.access == false) {
        return false;
    }
    if (matches.path === '*' && routerElementNextSibling !== null) {
        routerElementNextSibling.remove();
    }

    routerElement[matches.pathRender].insertAdjacentHTML('afterend', matches.component);
});