import Ripple from "../ripple/index.js"

class WKChip extends HTMLElement {

    constructor() {

        super()

        if (this.textContent) {
            this.text = this.textContent
        }
    }

    render() {

        this.innerHTML = `
            ${this.thumb || this.icon ? `<div class="chip__thumb" ${this.thumb ? `style="background-image: url(${this.thumb})"` : ``}>${this.icon}</div>` : ``}
            ${this.filter ? `<div class="chip__checkmark"></div>` : ``}
            ${this.text ? `<div class="chip__text">${this.text}</div>` : ``}
            ${this.remove ? `<div class="chip__remove"></div>` : ``}
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
			"input",
			"remove",
			"text",
			"thumb",
			"icon",
			"choice",
			"activated",
			"filter",
			"selected",
			"action",
			
        ]
    }

    click(event) {

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

    get input() {

        return this.hasAttribute("input")
    }

	set input(value) {

        if (this.input) {
            this.removeAttribute("input")
        } else {
            this.setAttribute("input", "")
        }
    }

	get remove() {

        return this.hasAttribute("remove")
    }

	set remove(value) {

        if (this.remove) {
            this.removeAttribute("remove")
        } else {
            this.setAttribute("remove", "")
        }
    }

	get text() {

        return this.getAttribute("text")
    }

	set text(value) {

        this.setAttribute("text", value)
    }

	get thumb() {

        return this.getAttribute("thumb")
    }

	set thumb(value) {

        this.setAttribute("thumb", value)
    }

	get icon() {

        return this.getAttribute("icon") || ""
    }

	set icon(value) {

        this.setAttribute("icon", value)
    }

	get choice() {

        return this.hasAttribute("choice")
    }

	set choice(value) {

        if (this.choice) {
            this.removeAttribute("choice")
        } else {
            this.setAttribute("choice", "")
        }
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

	get filter() {

        return this.hasAttribute("filter")
    }

	set filter(value) {

        if (this.filter) {
            this.removeAttribute("filter")
        } else {
            this.setAttribute("filter", "")
        }
    }

	get selected() {

        return this.hasAttribute("selected")
    }

	set selected(value) {

        if (this.selected) {
            this.removeAttribute("selected")
        } else {
            this.setAttribute("selected", "")
        }
    }

	get action() {

        return this.hasAttribute("action")
    }

	set action(value) {

        if (this.action) {
            this.removeAttribute("action")
        } else {
            this.setAttribute("action", "")
        }
    }

	
}

customElements.define("wk-chip", WKChip)