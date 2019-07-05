/**
 * @class WKTopAppBar
 */
class WKTopAppBar extends HTMLElement {

    constructor() {

        super()

        this.originalInnerHTML = this.innerHTML
    }

    render() {

        this.innerHTML = `
            <wk-top-app-bar-row>
                ${this.navigation || this.label ? 
                `<wk-top-app-bar-section start>
                    ${this.navigation ? `<wk-icon actionable class="top-app-bar__action top-app-bar__action--navigation"></wk-icon>` : ``}
                    ${this.label ? `<div class="top-app-bar__title">${this.label}</div>` : ``}
                </wk-top-app-bar-section>` : 
                ``}
                ${this.actions || this.menu ? 
                `<wk-top-app-bar-section end>
                    ${this.actions}
                    ${this.menu ? `<wk-icon actionable class="top-app-bar__action top-app-bar__action--menu"></wk-icon>` : ``}
                </wk-top-app-bar-section>` : 
                ``}
            </wk-top-app-bar-row>
            ${this.originalInnerHTML}
        `
    }

    connectedCallback() {
        this.render()

        this.topAppBarActionNavigation = this.querySelector(".top-app-bar__action--navigation")
        this.topAppBarActionMenu = this.querySelector(".top-app-bar__action--menu")

        if (this.topAppBarActionNavigation) {
            this.topAppBarActionNavigation.addEventListener("click", this.navigationClick.bind(this))
        }
        if (this.topAppBarActionMenu) {
            this.topAppBarActionMenu.addEventListener("click", this.menuClick.bind(this))
        }
    }
    
    disconnectedCallback() {

        this.topAppBarActionNavigation.removeEventListener("click", this.navigationClick.bind(this))
        this.topAppBarActionMenu.removeEventListener("click", this.menuClick.bind(this))
    }

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue != newValue) {
            this.render()
        }
    }

    static get observedAttributes() {

        return [
            "extended",
			"colored",
			"navigation",
			"menu",
			"label",
			"actions",
			
        ]
    }

    navigationClick(event) {

        this.dispatchEvent(new CustomEvent("onNavigationClick", {
            detail: {
                event
            }
        }))
    }

    menuClick(event) {

        this.dispatchEvent(new CustomEvent("onMenuClick", {
            detail: {
                event
            }
        }))
    }

    get extended() {

        return this.hasAttribute("extended")
    }

    set extended(value) {

        if (this.extended) {
            this.removeAttribute("extended")
        } else {
            this.setAttribute("extended", "")
        }
    }

	get colored() {

        return this.hasAttribute("colored")
    }

    set colored(value) {

        if (this.colored) {
            this.removeAttribute("colored")
        } else {
            this.setAttribute("colored", "")
        }
    }

	get navigation() {

        return this.hasAttribute("navigation")
    }

    set navigation(value) {

        if (this.navigation) {
            this.removeAttribute("navigation")
        } else {
            this.setAttribute("navigation", "")
        }
    }

	get menu() {

        return this.hasAttribute("menu")
    }

    set menu(value) {

        if (this.menu) {
            this.removeAttribute("menu")
        } else {
            this.setAttribute("menu", "")
        }
    }

	get label() {

        return this.getAttribute("label")
    }

    set label(value) {

        this.setAttribute("label", value)
    }

    get actions() {

        let actions = document.querySelector(this.getAttribute("actions"))

        return actions ? actions.innerHTML : ""
    }

    // set actions(value) {

    //     this.setAttribute("actions", value)
    // }

	
}

customElements.define("wk-top-app-bar", WKTopAppBar)

/**
 * @class WKTopAppBarRow
 */
class WKTopAppBarRow extends HTMLElement {

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

customElements.define("wk-top-app-bar-row", WKTopAppBarRow)

/**
 * @class WKTopAppBarSection
 */
class WKTopAppBarSection extends HTMLElement {

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
            "start",
			"end",
			
        ]
    }

    // click(event) {

    //     this.dispatchEvent(new CustomEvent("onClick", {
    //         detail: {
    //             event
    //         }
    //     }))
    // }

    get start() {

        return this.hasAttribute("start")
    }

    set start(value) {

        if (this.start) {
            this.removeAttribute("start")
        } else {
            this.setAttribute("start", "")
        }
    }

	get end() {

        return this.hasAttribute("end")
    }

    set end(value) {

        if (this.end) {
            this.removeAttribute("end")
        } else {
            this.setAttribute("end", "")
        }
    }

	
}

customElements.define("wk-top-app-bar-section", WKTopAppBarSection)
