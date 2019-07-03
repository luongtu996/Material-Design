let attrs = []
let tag = "wk-button-group"
let cls = tag.split("-").map((tag, index) => {
    if (index > 0) {
        tag = tag.charAt(0).toUpperCase() + tag.slice(1)
    } else {
        tag = tag.toUpperCase()
    }
    return tag
}).join("")

document.querySelectorAll(tag).forEach(element => {
    Array.from(element.attributes).forEach(attr => {
        if (!attrs.find(obj => obj.name === attr.name)) {
            attrs.push({
                name: attr.name,
                type: attr.value === "true" ? "boolean" : "string"
            })
        }
    })
})

console.log(`class ${cls} extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        this.innerHTML = \`
        \`
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
            ${attrs.map(attr => `"${attr.name}",\n\t\t\t`).join("")}
        ]
    }

    click(event) {

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    ${attrs.map(attr => `get ${attr.name}() {

        return this.getAttribute("${attr.name}")
    }\n\n\t${attr.type === "boolean" ? `set ${attr.name}(value) {

        if (this.${attr.name}) {
            this.removeAttribute("${attr.name}")
        } else {
            this.setAttribute("${attr.name}", "")
        }
    }\n\n\t` : `set ${attr.name}(value) {

        this.setAttribute("${attr.name}", value)
    }\n\n\t`}`).join("")}
}

customElements.define("${tag}", ${cls})`)