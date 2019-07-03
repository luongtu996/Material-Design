class RegisterComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Register Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define("register-component", RegisterComponent)

export default `<register-component></register-component>`