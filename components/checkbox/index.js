import Ripple from "../ripple/index.js"

class WKCheckbox extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        this.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox__input"
                ${this.name ? `name="${this.name}"` : ``}
                ${this.value ? `value="${this.value}"` : ``}
                ${this.required ? `required` : ``}
                ${this.disabled ? `disabled` : ``}
                ${this.indeterminate ? `indeterminate` : ``}
                ${this.checked ? `checked` : ``}
            >
            <div class="checkbox__track">
                <div class="checkbox__thumb"></div>
            </div>
        `
    }

    connectedCallback() {
        this.render()

        this.checkboxInput = this.querySelector(".checkbox__input")

        if (this.indeterminate) {

            this.checkboxInput.indeterminate = true
        }

        new Ripple(this.querySelector(".checkbox__input"), {
            delegate: this.querySelector(".checkbox__track"),
            circumference: 40
        })

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
            "name",
			"value",
			"required",
			"disabled",
			"indeterminate",
			"checked",
			
        ]
    }

    click(event) {

        this.dispatchEvent(new CustomEvent("onClick", {
            detail: {
                event
            }
        }))
    }

    get name() {

        return this.getAttribute("name")
    }

    set name(value) {

        this.setAttribute("name", value)
    }

	get value() {

        return this.getAttribute("value")
    }

    set value(value) {

        this.setAttribute("value", value)
    }

	get required() {

        return this.hasAttribute("required")
    }

    set required(value) {

        if (this.required) {
            this.removeAttribute("required")
        } else {
            this.setAttribute("required", "")
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

	get indeterminate() {

        return this.hasAttribute("indeterminate")
    }

    set indeterminate(value) {

        if (this.indeterminate) {
            this.removeAttribute("indeterminate")
        } else {
            this.setAttribute("indeterminate", "")
        }
    }

	get checked() {

        return this.hasAttribute("checked")
    }

    set checked(value) {

        if (this.checked) {
            this.removeAttribute("checked")
        } else {
            this.setAttribute("checked", "")
        }
    }

	
}

customElements.define("wk-checkbox", WKCheckbox)