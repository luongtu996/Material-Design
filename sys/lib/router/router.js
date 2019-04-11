/**
 * @class
 * @extends {HTMLElement}
 */
class Component extends HTMLElement { }

/**
 * @class
 * @extends {Component}
 */
class RouterComponent extends Component { }
// <md-router></md-router>
customElements.define('md-router', RouterComponent);

/**
 * @class
 */
export default class Router {

    /**
     * @private
     * @property {object} queryParams
     */
    queryParams = {};

    /**
     * @private
     * @property {object} pathParams
     */
    pathParams = {};

    /**
     * @private
     * @property {object} oldPath
     */
    oldPath = [];

    /**
     * @private
     * @property {object} route
     * @property {object} route.component
     * @property {object} route.path
     * @property {object} route.children
     */
    route = {
        component: `<div><md-router></md-router></div>`,
        path: undefined,
        children: [],
    };

    /**
     * @constructor
     * @param {array} routes 
     */
    constructor(routes = []) {
        this.routes = this.routesReduce(routes);
        this.hashChange = this.hashChange.bind(this);

        window.addEventListener('DOMContentLoaded', this.hashChange);
        window.addEventListener('hashchange', this.hashChange);
    }

    /**
     * routesReduce
     * @param {array} routes 
     * @param {string} name 
     * @param {string} id 
     * @param {number} level 
     */
    routesReduce(routes = [], name = '', id = '', level = 0) {
        return routes.reduce((routes, route, index) => {
            route = Object.assign({}, this.route, route);
            route.name = `${name}/${route.path}`.slice(1);
            route.id = `${id}/${index}`.slice(1);
            route.level = level;
            routes = routes.concat(route);

            if (route.children) {
                routes = routes.concat(this.routesReduce(route.children, `${name}/${route.path}`, `${id}/${index}`, (level + 1)));
            }

            return routes;
        }, []);
    }

    /**
     * @type {string} hash
     */
    get hash() {
        return window.location.hash.replace(/#|(?:\?)(.*)(?:$)/g, (search, query) => {
            this.queryParams = [...new URLSearchParams(query)].reduce((result, param) => {
                result[param[0]] = param[1];

                return result;
            }, {});

            return '';
        });
    }

    /**
     * hashMatch
     * @param {string} hash 
     * @param {string} path 
     */
    hashMatch(hash, path) {
        let params = [];
        let matches = hash.match(new RegExp(path.replace(/(?:\:)(\w+)/g, (search, param) => {
            if (params.indexOf(param) == -1) {
                params.push(param);
            }

            return '([^\/]+)';
        }).replace(/\*/g, '(?:.*)') + '(?:$)'));

        if (matches && matches[0] === hash) {
            if (params.length > 0) {
                this.pathParams = matches.slice(1).reduce((result, param, index) => {
                    result[params[index]] = param;

                    return result;
                }, {});
            }

            return matches;
        }

        return null;
    }

    /**
     * @listens hashChange
     */
    hashChange() {
        let route = this.routes.find(route => this.hashMatch(this.hash, route.name));

        route.id.split('/').map((id, index, array) => {
            let newPath = array.slice(0, index);
            newPath.push(id);
            let matches = this.routes.find(route => this.hashMatch(newPath.join('/'), route.id));

            if (matches && this.oldPath[index] !== newPath[index] || (array.length - 1) == index) {

                let mdRouter = document.querySelectorAll('md-router');

                if (mdRouter[matches.level].nextElementSibling) {
                    mdRouter[matches.level].nextElementSibling.remove();
                }

                mdRouter[matches.level].insertAdjacentHTML('afterend', matches.component);

                this.oldPath = newPath;
            }
        });
    }
}