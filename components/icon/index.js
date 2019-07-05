import "../ripple/index.js"
import Ripple from "../ripple/index.js";

class WKIcon extends HTMLElement {

    constructor() {

        super()
    }

    render() {

        // this.innerHTML = `
        // `
    }

    connectedCallback() {
        this.render()

        if (this.actionable) {
            
            new Ripple(this, {
                circumference: 40
            })
        }

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
            "actionable",
			
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    get actionable() {

        return this.hasAttribute("actionable")
    }

    set actionable(value) {

        if (this.actionable) {
            this.removeAttribute("actionable")
        } else {
            this.setAttribute("actionable", "")
        }
    }

	
}

customElements.define("wk-icon", WKIcon)