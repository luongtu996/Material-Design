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

    // user by system
    // to compare with new alias
    aliasing = '';

    // base route template
    route = {
        path: undefined,
        component: undefined,
        children: [],
        access: true,
        accessChild: true,
    }

    constructor(routes = []) {
        // intialize route
        this.routes = routes;
        // binding `this` to listener
        this.listenHashchange = this.listenHashchange.bind(this);

        // listener
        window.addEventListener('DOMContentLoaded', this.listenHashchange);
        window.addEventListener('hashchange', this.listenHashchange);
    }

    // routes map
    set routes(routes = []) {
        this._routes = this.routesMap(routes);
    }

    // current routes map
    get routes() {
        return this._routes;
    }

    // set hash
    set hash(path) {
        window.location.hash = path;
    }

    // get current hash
    get hash() {
        return window.location.hash.replace(/#/, '').replace(/\?.*/, '');
    }

    // change hash to path root
    get alias() {
        let matches = this.routeMatchName(this.hash);
        return matches ? matches.pathAlias : matches;
    }

    // handle child route
    get aliasMap() {
        return this.alias.split('/').map((value, index, array) => {
            let path = array.slice(0, index);
            path.push(value);
            return path.join('/');
        });
    }

    // getting hash with query params
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
    
    // render...
    listenHashchange(event) {
        this.aliasMap.map((alias, index, array) => {
            let matches = this.routeMatchAlias(alias);
            let aliasingList = this.aliasing.split('/');
            let aliasList = alias.split('/');
            
            if (aliasingList[index] !== aliasList[index] || (array.length - 1) == index) {

                if (matches) {                    
                    let routerComponent = document.querySelectorAll('md-router');
                    let routerComponentNextElementSibling = routerComponent[matches.pathId].nextElementSibling
                    
                    if (routerComponentNextElementSibling) {
                        routerComponentNextElementSibling.remove();
                    }
                    
                    routerComponent[matches.pathId].insertAdjacentHTML('afterend', matches.component);
                }

                this.aliasing = alias;
            }
        });
    }

    // regexp for pathName & path alias
    pathToRegExp(path) {
        return new RegExp(path.replace(/:\w+/g, '([^\/]+)').replace(/\*/g, '(?:.*)') + '(?:$)');
    }

    // maching hash with path
    // maching alias with path
    hashMatch(hash, path) {
        let matches = hash.match(this.pathToRegExp(path));

        if (matches && matches[0] == hash) {
            return matches;
        }

        return null;
    }

    // flatten routes
    routesMap(routesTree, pathName = '', pathAlias = '', pathId = 0) {
        return routesTree.reduce((routes, route, index) => {
            route = Object.assign({}, this.route, route);
            index = route.path.match(/:\w+/g) ? route.path : index;

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

    // matches by pathName
    routeMatchName(hash) {
        return this.routes.find(route => this.hashMatch(hash, route.pathName));
    }
    
    // matches by pathAlias
    routeMatchAlias(hash) {
        return this.routes.find(route => this.hashMatch(hash, route.pathAlias));
    }
}