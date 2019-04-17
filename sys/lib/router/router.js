class WKRouter extends HTMLElement { }
customElements.define('wk-router', WKRouter)

class WKApp extends HTMLElement {
    
    constructor() {
        super()

        this.innerHTML = `
            <h1>Welcome App Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define('wk-app', WKApp)

let AppComponent = `<wk-app></wk-app>`

class Router {

    constructor(routes = []) {
        this.hashChange = this.hashChange.bind(this)

        this.routes = this.reduceRoutes(routes)

        this.oldNode = []

        window.addEventListener('DOMContentLoaded', this.hashChange)
        window.addEventListener('hashchange', this.hashChange)
    }

    reduceRoutes(routes = [], name = '', node = '', depth = 0) {

        return routes.reduce((routes, route, index) => {
            route.name = `${name}/${route.path}`.slice(1)
            route.node = `${node}/${index}`.slice(1)
            route.depth = depth
            
            routes = routes.concat(route)
            
            if (route.children) {
                routes = routes.concat(
                    this.reduceRoutes(
                        route.children, 
                        `${name}/${route.path}`, 
                        `${node}/${index}`, 
                        depth + 1
                    )
                )
            }

            return routes
        }, [])
    }

    matchState(state, name) {
        let segment = []
        let matches = state.match(
            new RegExp(
                name
                .replace(/(?:\:)(\w+)/g, (match, value) => {
                    if (segment.indexOf(value) == -1) {
                        segment.push(value)
                    }

                    return '([^\/]+)'
                })
                .replace(/\*/g, '(?:.*)')
                + '(?:$)'
            )
        )

        if (matches && matches[0] == state) {
            if (segment.length > 0) {
                this.segmentParams = matches.slice(1).reduce((acc, value, index) => {
                    acc[segment[index]] = value
                    
                    return acc
                }, {})
            }

            return matches
        }

        return null
    }

    hashChange(event) {
        let hash = window.location.hash

        if (!hash.match(/^#\//)) {
            window.location.hash = '/'
        }

        if (!hash.match(/^#\//)) {

            return
        }

        let query = ''

        let state = hash
        .replace(/^#/, '')
        .replace(/(?:\?)(.*)(?:$)/, (search, value) => {
            query = value

            return ''
        })

        this.queryParams = {}

        if (query) {
            this.queryParams = [...(new URLSearchParams(query))].reduce((acc, value) => {
                acc[value[0]] = value[1]

                return acc
            }, {})
        }

        this.segmentParams = {}
        
        let route = this.routes.find((route) => this.matchState(state, route.name))

        if (!route) {

            return
        }

        route.node.split('/').map((value, index, array) => {
            let newNode = array.slice(0, index)
            newNode.push(value)

            let node = this.routes.find((route) => this.matchState(newNode.join('/'), route.node))

            if (node && this.oldNode[index] !== newNode[index] || (array.length - 1) == index) {
                let wkRouter = document.querySelectorAll('wk-router')

                if (wkRouter[node.depth].nextElementSibling) {
                    wkRouter[node.depth].nextElementSibling.remove()
                }

                wkRouter[node.depth].insertAdjacentHTML('afterend', node.component)

                this.oldNode = newNode
            }
        })

        console.log(this, event)
    }
}

// test running router

let routes = [
    // root 1
    { component: AppComponent, path: '', children: [
        { component: AppComponent, path: '', },
        { component: AppComponent, path: 'home', },
        { component: AppComponent, path: 'users', children: [
            { component: AppComponent, path: '', },
            { component: AppComponent, path: ':asdf', children: [
                { component: AppComponent, path: '', },
                { component: AppComponent, path: ':qwer', },
            ]},
        ]},
    ]},
    // root 2
    { component: AppComponent, path: '', children: [
        { component: AppComponent, path: '', },
        { component: AppComponent, path: 'login', },
        { component: AppComponent, path: 'register', },
    ]},
    // root 3
    { component: AppComponent, path: '/demo/:asdf/:qwer', },
    // wildcard
    { component: AppComponent, path: '*', },
]

new Router(routes)