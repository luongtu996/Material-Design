class TopAppBarComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <iframe class="demo-iframe" src="./components/top-app-bar/index.1.html"></iframe>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <iframe class="demo-iframe" src="./components/top-app-bar/index.2.html"></iframe>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                </div>
            </div>
        `
    }
}
customElements.define("topappbar-component", TopAppBarComponent)

export default `<topappbar-component></topappbar-component>`