class CheckboxComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>
                    
                    <wk-layout-column columnLarge="3">

                        <wk-checkbox name="name" value="value" required></wk-checkbox>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-checkbox indeterminate></wk-checkbox>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-checkbox checked></wk-checkbox>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                    <wk-layout-column columnLarge="3">

                        <wk-checkbox disabled></wk-checkbox>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-checkbox disabled indeterminate></wk-checkbox>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">

                        <wk-checkbox disabled checked></wk-checkbox>

                    </wk-layout-column>
                    <wk-layout-column columnLarge="3"></wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("checkbox-component", CheckboxComponent)

export default `<checkbox-component></checkbox-component>`