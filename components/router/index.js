// logic test
// can't be used yet

class WKRouter extends HTMLElement { }

customElements.define("wk-router", WKRouter)

export default class Router {

    constructor(routes = []) {

        this.routes = this.flattenedRoutes(routes)

        window.addEventListener("DOMContentLoaded", this.hashchange.bind(this))
        window.addEventListener("hashchange", this.hashchange.bind(this))
    }

    flattenedRoutes(originalRoutes, name = "", tree = "", root = 0) {

        return originalRoutes.reduce((routes, route, index) => {

            route.pathName = `${name}/${route.path}`.slice(1) || "/"
            route.pathTree = `${tree}/${index}`.slice(1)
            route.pathRoot = root

            routes = routes.concat(route)

            if (route.children) {

                routes = routes.concat(this.flattenedRoutes(route.children, `${name}/${route.path}`, `${tree}/${index}`, root + 1))
            }

            return routes
        }, [])
    }

    hashchange(event) {

        if (!window.location.hash.match(/^\#/)) {
            return window.location.hash = "/"
        }

        this.path = window.location.hash.replace(/^\#/, "").replace(/(?:\?)(.*)(?:$)/, "")

        this.route = this.routes.find(route => {

            let matches = this.path.match(new RegExp(route.pathName.replace(/(?:\:)(\w+)/, "([^\/]+)").replace(/\*\*/, "(?:.*)") + "(?:$)"))

            if (matches && matches[0] === this.path) {
                return route
            }

            return null
        })

        if (!this.route) {
            return
        }

        this.route.pathTree.split("/").forEach((tree, index, array) => {
            let pathTree = array.slice(0, index)
            pathTree.push(tree)

            let oldPath = this.oldPath || []

            let route = this.routes.find(route => {

                if (route.pathTree === pathTree.join("/")) {
                    return route
                }

                return null
            })

            if ((route && oldPath[index] != pathTree[index]) || (route && (array.length - 1) === index)) {

                let elements = document.querySelectorAll("wk-router")

                if (elements.length) {
                    
                    if (elements[route.pathRoot].nextElementSibling) {
    
                        elements[route.pathRoot].nextElementSibling.remove()
                    }
    
                    elements[route.pathRoot].insertAdjacentHTML("afterend", route.component)
                }

                this.oldPath = pathTree
            }

        })
    }
}

// import HomeComponent from "./home.js"
// import ContactsComponent from "./contacts.js"
// import UsersComponent from "./users.js"
// import UserDetailComponent from "./userdetail.js"
// import AuthComponent from "./auth.js"
// import LoginComponent from "./login.js"
// import RegisterComponent from "./register.js"
// import PageNotFoundComponent from "./pagenotfound.js"

// new Router([
//     {
//         path: "", component: HomeComponent, children: [
//             { path: "contacts", component: ContactsComponent },
//             {
//                 path: "users", component: UsersComponent, children: [
//                     { path: ":id", component: UserDetailComponent }
//                 ]
//             },
//         ]
//     },
//     {
//         path: "", component: AuthComponent, children: [
//             { path: "login", component: LoginComponent },
//             { path: "register", component: RegisterComponent },
//         ]
//     },
//     { path: "/test/:id/:name" },
//     { path: "**", component: PageNotFoundComponent },
// ])