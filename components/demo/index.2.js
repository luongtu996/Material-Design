class WKElement extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        this.innerHTML = `
            Hello ${this.text}!
        `

        console.log(JSON.parse(this.json))
        console.log(JSON.parse(this.array))
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
            "text",
            "json",
            "array",
        ]
    }

    click(event) {

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    get json() {

        return this.getAttribute("json")
    }

    get array() {

        return this.getAttribute("array")
    }

    get text() {

        return this.getAttribute("text")
    }

    set text(value) {

        this.setAttribute("text", value)
    }

    get toggle() {

        return this.hasAttribute("toggle")
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