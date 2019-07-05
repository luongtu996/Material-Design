class TopAppBarComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>

                    <wk-layout-column columnLarge="3" columnMedium="8" columnSmall="4">
                    
                        <iframe class="demo-iframe" src="./components/top-app-bar/index.1.html"></iframe>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3" columnMedium="8" columnSmall="4">
                    
                        <iframe class="demo-iframe" src="./components/top-app-bar/index.2.html"></iframe>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3" columnMedium="8" columnSmall="4">
                    
                        <iframe class="demo-iframe" src="./components/top-app-bar/index.3.html"></iframe>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3" columnMedium="8" columnSmall="4">
                    
                        <iframe class="demo-iframe" src="./components/top-app-bar/index.4.html"></iframe>

                    </wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("topappbar-component", TopAppBarComponent)

export default `<topappbar-component></topappbar-component>`