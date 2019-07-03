class LoginComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Login Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define("login-component", LoginComponent)

export default `<login-component></login-component>`