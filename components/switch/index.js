import Ripple from "../ripple/index.js"

class WKSwitch extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        this.innerHTML = `
            <input 
                type="checkbox" 
                class="switch__input"
                ${this.name ? `name="${this.name}"` : ``}
                ${this.value ? `value="${this.value}"` : ``}
                ${this.required ? `required` : ``}
                ${this.disabled ? `disabled` : ``}
                ${this.checked ? `checked` : ``}
            >
            <div class="switch__track">
                <div class="switch__thumb"></div>
            </div>
        `
    }

    connectedCallback() {
        this.render()

        this.switchInput = this.querySelector(".switch__input")

        if (this.indeterminate) {

            this.switchInput.indeterminate = true
        }

        new Ripple(this.querySelector(".switch__input"), {
            delegate: this.querySelector(".switch__thumb"),
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

customElements.define("wk-switch", WKSwitch)