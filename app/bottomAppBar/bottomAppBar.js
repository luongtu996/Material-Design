class BottomAppBarComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <iframe class="demo-iframe" src="./components/bottom-app-bar/index.1.html"></iframe>
                    
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <iframe class="demo-iframe" src="./components/bottom-app-bar/index.2.html"></iframe>
                    
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <iframe class="demo-iframe" src="./components/bottom-app-bar/index.3.html"></iframe>
                    
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <iframe class="demo-iframe" src="./components/bottom-app-bar/index.4.html"></iframe>
                    
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <iframe class="demo-iframe" src="./components/bottom-app-bar/index.5.html"></iframe>
                    
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <iframe class="demo-iframe" src="./components/bottom-app-bar/index.6.html"></iframe>
                    
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("bottomappbar-component", BottomAppBarComponent)

export default `<bottomappbar-component></bottomappbar-component>`