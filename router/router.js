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
class RouterComponent extends Component {}
customElements.define('md-router', RouterComponent);

/* 
    @class Router
*/
export default class Router {

    constructor(routes = []) {
        this.routes = this.routesMap(routes);
        this.listenHashchange = this.listenHashchange.bind(this);

        window.addEventListener('DOMContentLoaded', this.listenHashchange);
        window.addEventListener('hashchange', this.listenHashchange);
    } 

    set hash(path) {
        window.location.hash = path;
    }

    get hash() {
        let hash = window.location.hash;

        // hash = hash === '' ? '/' : hash;
        hash = hash.replace(/#/, '');
        hash = hash.replace(/\?.*/, '');

        return hash;
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

    get hashMap() {
        return this.hash.split('/').map((value, index, array) => {
            let path = array.slice(0, index);
            
            path.push(value);

            return path.join('/');
        });
    }

    listenHashchange(event) {
        this.hashMap.map(hash => {
            let matches = this.routeMatch(hash);
            let routerComponent = document.querySelectorAll('md-router');
            
            if (matches) {
                routerComponent[matches.index].nextSibling.remove();
                routerComponent[matches.index].insertAdjacentHTML('afterend', matches.component);
            }
        });
    }

    pathToRegExp(path) {
        return new RegExp(
            path
                .replace(/:\w+/g, '([^\/]+)')
                .replace(/\*/g, '(?:.*)')
            + '(?:$)'
        )
    }

    hashMatch(hash, path) {
        return hash.match(this.pathToRegExp(path));
    }

    routesMap(routesTree, _path = '', index = 0) {
        return routesTree.reduce((routes, route) => {
            route._path = `${_path}/${route.path}`.slice(1);
            route.index = index;
            routes = routes.concat(route);
            
            if (route.children) {
                routes = routes.concat(this.routesMap(route.children, `${_path}/${route.path}`, index + 1));
            }

            return routes;
        }, []);
    }

    routeMatch(hash) {
        return this.routes.find(route => {
            let matches = this.hashMatch(hash, route._path);

            if (matches && matches[0] == hash) {
                return matches;
            }

            return null;
        });
    }
}