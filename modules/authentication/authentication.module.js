// Authentication Layout
class AuthenticationModule extends HTMLElement {

    constructor() {
        super()

        this.innerHTML = `
            <h1>AuthenticationModule</h1>
            <wk-router></wk-router>
        `
    }
}

customElements.define('authentication-module', AuthenticationModule)

export default `<authentication-module></authentication-module>`