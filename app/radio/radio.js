class RadioComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>
                    
                    <wk-layout-column columnLarge="3">

                        <wk-radio name="radio1" value="value" required></wk-radio>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-radio name="radio1" checked></wk-radio>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                    <wk-layout-column columnLarge="3">

                        <wk-radio name="radio2" disabled></wk-radio>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-radio name="radio2" disabled checked></wk-radio>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("radio-component", RadioComponent)

export default `<radio-component></radio-component>`