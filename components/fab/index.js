/**
 * @import Ripple
 */
import Ripple from "../ripple/index.js";

/**
 * @class WKFab
 */
class WKFab extends HTMLElement {

    constructor() {

        super()

        if(this.textContent) {
            this.text = this.textContent
        }
    }

    render() {

        this.innerHTML = `
            ${this.icon ? `<div class="fab__icon">${this.icon}</div>` : ``}
            ${this.text ? `<div class="fab__text">${this.text}</div>` : ``}
        `
    }

    connectedCallback() {
        this.render()

        new Ripple(this)

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
            "icon",
			"mini",
			"extended",
			"text",
			
        ]
    }

    click(event) {

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    get icon() {

        return this.getAttribute("icon")
    }

	set icon(value) {

        this.setAttribute("icon", value)
    }

	get mini() {

        return this.getAttribute("mini")
    }

	set mini(value) {

        if (this.mini) {
            this.removeAttribute("mini")
        } else {
            this.setAttribute("mini", "")
        }
    }

	get extended() {

        return this.getAttribute("extended")
    }

	set extended(value) {

        if (this.extended) {
            this.removeAttribute("extended")
        } else {
            this.setAttribute("extended", "")
        }
    }

	get text() {

        return this.getAttribute("text")
    }

	set text(value) {

        this.setAttribute("text", value)
    }

	
}

customElements.define("wk-fab", WKFab)