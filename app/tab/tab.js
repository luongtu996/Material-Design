class TabComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>

                    <wk-layout-column columnLarge="3">

                        <wk-tab-bar>
                            <wk-tab activated>Item 1</wk-tab>
                            <wk-tab>Item 2</wk-tab>
                            <wk-tab>Item 3</wk-tab>
                        </wk-tab-bar>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-tab-bar>
                            <wk-tab activated icon="&#xE721;"></wk-tab>
                            <wk-tab icon="&#xE722;"></wk-tab>
                            <wk-tab icon="&#xE723;"></wk-tab>
                        </wk-tab-bar>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-tab-bar>
                            <wk-tab activated icon="&#xE721;">Item 1</wk-tab>
                            <wk-tab icon="&#xE722;">Item 2</wk-tab>
                            <wk-tab icon="&#xE723;">Item 3</wk-tab>
                        </wk-tab-bar>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                    <wk-layout-column columnLarge="3">

                        <wk-tab-bar scrollable>
                            <wk-tab activated>Item 1</wk-tab>
                            <wk-tab>Item 2</wk-tab>
                            <wk-tab>Item 3</wk-tab>
                            <wk-tab>Item 4</wk-tab>
                            <wk-tab>Item 5</wk-tab>
                            <wk-tab>Item 6</wk-tab>
                            <wk-tab>Item 7</wk-tab>
                            <wk-tab>Item 8</wk-tab>
                            <wk-tab>Item 9</wk-tab>
                            <wk-tab>Item 10</wk-tab>
                        </wk-tab-bar>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-tab-bar scrollable>
                            <wk-tab activated icon="&#xE721;"></wk-tab>
                            <wk-tab icon="&#xE722;"></wk-tab>
                            <wk-tab icon="&#xE723;"></wk-tab>
                            <wk-tab icon="&#xE724;"></wk-tab>
                            <wk-tab icon="&#xE725;"></wk-tab>
                            <wk-tab icon="&#xE726;"></wk-tab>
                            <wk-tab icon="&#xE727;"></wk-tab>
                            <wk-tab icon="&#xE728;"></wk-tab>
                            <wk-tab icon="&#xE729;"></wk-tab>
                            <wk-tab icon="&#xE7210;"></wk-tab>
                        </wk-tab-bar>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-tab-bar scrollable>
                            <wk-tab activated icon="&#xE721;">Item 1</wk-tab>
                            <wk-tab icon="&#xE722;">Item 2</wk-tab>
                            <wk-tab icon="&#xE723;">Item 3</wk-tab>
                            <wk-tab icon="&#xE724;">Item 4</wk-tab>
                            <wk-tab icon="&#xE725;">Item 5</wk-tab>
                            <wk-tab icon="&#xE726;">Item 6</wk-tab>
                            <wk-tab icon="&#xE727;">Item 7</wk-tab>
                            <wk-tab icon="&#xE728;">Item 8</wk-tab>
                            <wk-tab icon="&#xE729;">Item 9</wk-tab>
                            <wk-tab icon="&#xE7210;">Item 10</wk-tab>
                        </wk-tab-bar>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                    <wk-layout-column columnLarge="3">
                    
                    <iframe class="demo-iframe" src="./components/tab/index.1.html"></iframe>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("tab-component", TabComponent)

export default `<tab-component></tab-component>`