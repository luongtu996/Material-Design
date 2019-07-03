class UsersComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Users Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define("users-component", UsersComponent)

export default `<users-component></users-component>`