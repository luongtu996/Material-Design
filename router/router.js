/* 
    @class Component
*/
class Component extends HTMLElement {
    constructor() {
        super();
    }
}

/* 
    @class RouterComponent
*/
class RouterComponent extends Component { }
customElements.define('md-router', RouterComponent);

/* 
    @class Router
*/
export default class Router {

    route = {
        path: undefined,
        component: undefined,
        children: [],
        access: true,
        accessChild: true,
    }

    constructor(routes = []) {
        this.routes = routes;
        this.listenHashchange = this.listenHashchange.bind(this);

        window.addEventListener('DOMContentLoaded', this.listenHashchange);
        window.addEventListener('hashchange', this.listenHashchange);
    }

    set routes(routes = []) {
        this._routes = this.routesMap(routes);
    }

    get routes() {
        return this._routes;
    }

    set hash(path) {
        window.location.hash = path;
    }

    get hash() {
        return window.location.hash.replace(/#/, '').replace(/\?.*/, '');
    }

    get alias() {
        let matches = this.routeMatchName(this.hash);
        return matches ? matches.pathAlias : matches;
    }

    get aliasMap() {
        return this.alias.split('/').map((value, index, array) => {
            let path = array.slice(0, index);
            path.push(value);
            return path.join('/');
        });
    }

    get queryParams() {
        let query = window.location.hash.match(/\?.*(?:$)/);

        if (query) {
            return [...new URLSearchParams(query[0])].reduce((queryParams, param) => {
                queryParams[param[0]] = param[1];
                return queryParams;
            }, {});
        }

        return {};
    }

    listenHashchange(event) {
        this.aliasMap.map(alias => {
            let matches = this.routeMatchAlias(alias);
            let routerComponent = document.querySelectorAll('md-router');
            let routerComponentNextElementSibling = routerComponent[matches.pathId].nextElementSibling

            if (matches) {

                if (routerComponentNextElementSibling) {
                    routerComponentNextElementSibling.remove();
                }

                routerComponent[matches.pathId].insertAdjacentHTML('afterend', matches.component);
            }
        });
    }

    pathToRegExp(path) {
        return new RegExp(path.replace(/:\w+/g, '([^\/]+)').replace(/\*/g, '(?:.*)') + '(?:$)');
    }

    hashMatch(hash, path) {
        let matches = hash.match(this.pathToRegExp(path));

        if (matches && matches[0] == hash) {
            return matches;
        }

        return null;
    }

    routesMap(routesTree, pathName = '', pathAlias = '', pathId = 0) {
        return routesTree.reduce((routes, route, index) => {
            route = Object.assign({}, this.route, route);
            index = route.path.match(/:\w+|\*/g) ? route.path : index;

            route.pathName = `${pathName}/${route.path}`.slice(1);
            route.pathAlias = `${pathAlias}/${index}`.slice(1);
            route.pathId = pathId;

            routes = routes.concat(route);

            if (route.children) {
                routes = routes.concat(this.routesMap(route.children, `${pathName}/${route.path}`, `${pathAlias}/${index}`, pathId + 1));
            }

            return routes;
        }, []);
    }

    routeMatchName(hash) {
        return this.routes.find(route => this.hashMatch(hash, route.pathName));
    }

    routeMatchAlias(hash) {
        return this.routes.find(route => this.hashMatch(hash, route.pathAlias));
    }
}