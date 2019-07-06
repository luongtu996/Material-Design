import Ripple from "../ripple/index.js"

class WKTab extends HTMLElement {

    constructor() {

        super()

        if (this.textContent) {
            this.text = this.textContent
        }
    }

    render() {

        this.innerHTML = `
            ${this.icon ? `<wk-icon>${this.icon}</wk-icon>` : ``}
            ${this.text ? `<div class="tab__text">${this.text}</div>` : ``}
        `
    }

    connectedCallback() {
        this.render()

        new Ripple(this)

        if (this.activated) {
            this.updateIndicator()
        }

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
            "activated",
			"text",
			"icon",
			
        ]
    }

    click(event) {

        Array.from(this.parentNode.children).forEach(tab => tab.removeAttribute("activated"))

        if (this.hasAttribute("activated")) {
            this.removeAttribute("activated")
        } else {
            this.setAttribute("activated", "")
        }

        this.updateIndicator()

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    updateIndicator() {
        this.parentNode.style.setProperty("--tab-bar-before-left", `${this.offsetLeft}px`)
        this.parentNode.style.setProperty("--tab-bar-before-width", `${this.clientWidth}px`)

        this.parentNode.scrollLeft = (this.offsetLeft + this.clientWidth) - this.parentNode.clientWidth + this.clientWidth
    }

    get activated() {

        return this.hasAttribute("activated")
    }

    set activated(value) {

        if (this.activated) {
            this.removeAttribute("activated")
        } else {
            this.setAttribute("activated", "")
        }
    }

	get text() {

        return this.getAttribute("text")
    }

    set text(value) {

        this.setAttribute("text", value)
    }

	get icon() {

        return this.getAttribute("icon")
    }

    set icon(value) {

        this.setAttribute("icon", value)
    }

	
}

customElements.define("wk-tab", WKTab)

class WKTabBar extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        // this.innerHTML = `
        // `
    }

    connectedCallback() {
        this.render()

        // this.addEventListener("click", this.click)
    }
    
    disconnectedCallback() {

        // this.removeEventListener("click", this.click)
    }

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue != newValue) {
            this.render()
        }
    }

    static get observedAttributes() {

        return [
            "scrollable",
			
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    get scrollable() {

        return this.hasAttribute("scrollable")
    }

    set scrollable(value) {

        if (this.scrollable) {
            this.removeAttribute("scrollable")
        } else {
            this.setAttribute("scrollable", "")
        }
    }

	
}

customElements.define("wk-tab-bar", WKTabBar)