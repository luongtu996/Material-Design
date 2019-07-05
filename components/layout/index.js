/**
 * @class WKLayout
 */
class WKLayout extends HTMLElement {

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
            
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    
}

customElements.define("wk-layout", WKLayout)

/**
 * @class WKLayoutGrid
 */
class WKLayoutGrid extends HTMLElement {

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
            
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    
}

customElements.define("wk-layout-grid", WKLayoutGrid)

/**
 * @class WKLayoutColumn
 */
class WKLayoutColumn extends HTMLElement {

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
            "column",
			"columnlarge",
			"columnmedium",
			"columnsmall",
			
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    get column() {

        return this.getAttribute("column")
    }

    set column(value) {

        this.setAttribute("column", value)
    }

	get columnlarge() {

        return this.getAttribute("columnlarge")
    }

    set columnlarge(value) {

        this.setAttribute("columnlarge", value)
    }

	get columnmedium() {

        return this.getAttribute("columnmedium")
    }

    set columnmedium(value) {

        this.setAttribute("columnmedium", value)
    }

	get columnsmall() {

        return this.getAttribute("columnsmall")
    }

    set columnsmall(value) {

        this.setAttribute("columnsmall", value)
    }

	
}

customElements.define("wk-layout-column", WKLayoutColumn)