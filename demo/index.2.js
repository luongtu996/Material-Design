class WKButton extends HTMLElement {

    constructor() {
        super()
    }

    render() {
        this.innerHTML = ``
    }

    connectedCallback() {
        this.render()
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {
        this.render()
    }

    static get observedAttributes() {
        return []
    }
}

customElements.define("wk-button", WKButton)