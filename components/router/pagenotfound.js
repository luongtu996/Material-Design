class PageNotFoundComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Page Not Found Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define("pagenotfound-component", PageNotFoundComponent)

export default `<pagenotfound-component></pagenotfound-component>`