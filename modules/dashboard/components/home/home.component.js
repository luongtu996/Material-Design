// Dashboard Layout
class HomeComponent extends HTMLElement {

    constructor() {
        super()

        this.innerHTML = `
            <h1>HomeComponent</h1>
            <wk-router></wk-router>
        `
    }
}

customElements.define('home-component', HomeComponent)

export default `<home-component></home-component>`