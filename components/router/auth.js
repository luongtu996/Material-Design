class AuthComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Auth Component</h1>
            <nav>
                <a href="#/contacts">contacts</a>
                <a href="#/users">users</a>
                <a href="#/users/1">user detail</a>
                <a href="#/login">login</a>
                <a href="#/register">register</a>
            </nav>
            <wk-router></wk-router>
        `
    }
}
customElements.define("auth-component", AuthComponent)

export default `<auth-component></auth-component>`