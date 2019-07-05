/**
 * @import Ripple
 */
import Ripple from "../ripple/index.js"

/**
 * @class WKButton
 */
class WKButton extends HTMLElement {

    constructor() {

        super()

        if (this.textContent) {
            this.text = this.textContent
        }
    }

    render() {

        this.innerHTML = `
            ${this.icon ? `<div class="button__icon">${this.icon}</div>` : ``}
            ${this.text ? `<div class="button__text">${this.text}</div>` : ``}
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
            "outlined",
			"icon",
			"text",
			"contained",
			"toggle",
			"disabled",
			
        ]
    }

    click(event) {

        if (this.toggle) {

            let wkButtonGroup = this.parentNode

            if (!wkButtonGroup.multiple) {
                Array.from(wkButtonGroup.children).forEach(wkButton => wkButton.removeAttribute("activated"))
            }

            if (this.hasAttribute("activated")) {
                this.removeAttribute("activated")
            } else {
                this.setAttribute("activated", "")
            }
        }

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    get outlined() {

        return this.hasAttribute("outlined")
    }

	set outlined(value) {

        if (this.outlined) {
            this.removeAttribute("outlined")
        } else {
            this.setAttribute("outlined", "")
        }
    }

	get icon() {

        return this.getAttribute("icon")
    }

	set icon(value) {

        this.setAttribute("icon", value)
    }

	get text() {

        return this.getAttribute("text")
    }

	set text(value) {

        this.setAttribute("text", value)
    }

	get contained() {

        return this.hasAttribute("contained")
    }

	set contained(value) {

        if (this.contained) {
            this.removeAttribute("contained")
        } else {
            this.setAttribute("contained", "")
        }
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

	get disabled() {

        return this.hasAttribute("disabled")
    }

	set disabled(value) {

        if (this.disabled) {
            this.removeAttribute("disabled")
        } else {
            this.setAttribute("disabled", "")
        }
    }

	
}

customElements.define("wk-button", WKButton)




/**
 * @class WKButtonGroup
 */
class WKButtonGroup extends HTMLElement {

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
            "multiple",
			
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    get multiple() {

        return this.hasAttribute("multiple")
    }

	set multiple(value) {

        if (this.multiple) {
            this.removeAttribute("multiple")
        } else {
            this.setAttribute("multiple", "")
        }
    }

	
}

customElements.define("wk-button-group", WKButtonGroup)