import UsersModel from './users.model.js'
import UsersView from './users.view.js'

class UsersComponent extends HTMLElement {

    constructor() {
        super()

        this.innerHTML = `
            <h1>UsersComponent</h1>
            <wk-router></wk-router>
        `
    }
}

customElements.define('users-component', UsersComponent)

export default `<users-component></users-component>`