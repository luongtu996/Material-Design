class WKElement extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        this.innerHTML = `
            Hello ${this.text}!
        `
    }

    connectedCallback() {
        this.render()

        this.addEventListener("click", this.click)
    }
    
    disconnectedCallback() {

        this.removeEventListener("click", this.click)
    }

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue != newValue) {
            this.render()
        }
    }

    static get observedAttributes() {

        return [
            "text"
        ]
    }

    click(event) {

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    get text() {

        return this.getAttribute("text")
    }

    set text(value) {

        this.setAttribute("text", value)
    }

    get toggle() {

        return this.getAttribute("toggle")
    }

    set toggle(value) {

        if (this.toggle) {
            this.removeAttribute("toggle")
        } else {
            this.setAttribute("toggle", "")
        }
    }
}

customElements.define("wk-element", WKElement)