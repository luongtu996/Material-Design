class UserDetailComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>UserDetail Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define("userdetail-component", UserDetailComponent)

export default `<userdetail-component></userdetail-component>`