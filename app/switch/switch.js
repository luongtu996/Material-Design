class SwitchComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>
                    
                    <wk-layout-column columnLarge="3"">

                        <wk-switch name="switch1" value="value" required></wk-switch>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3""></wk-layout-column>
                    <wk-layout-column columnLarge="3"">

                        <wk-switch name="switch1" checked></wk-switch>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3""></wk-layout-column>

                    <wk-layout-column columnLarge="3"">

                        <wk-switch name="switch2" disabled></wk-switch>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3""></wk-layout-column>
                    <wk-layout-column columnLarge="3"">

                        <wk-switch name="switch2" disabled checked></wk-switch>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3""></wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("switch-component", SwitchComponent)

export default `<switch-component></switch-component>`