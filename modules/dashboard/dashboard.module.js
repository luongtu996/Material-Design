// Dashboard Layout
class DashboardModule extends HTMLElement {

    constructor() {
        super()

        this.innerHTML = `
            <h1>DashboardModule</h1>
            <wk-router></wk-router>
        `
    }
}

customElements.define('dashboard-module', DashboardModule)

export default `<dashboard-module></dashboard-module>`