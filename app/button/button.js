class ButtonComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>

                    <wk-layout-column columnLarge="3">
                        <wk-button>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button outlined>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button contained>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button-group>
                            <wk-button toggle icon="&#xE721;"></wk-button>
                            <wk-button toggle icon="&#xE722;"></wk-button>
                            <wk-button toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </wk-layout-column>

                    <wk-layout-column columnLarge="3">
                        <wk-button icon="&#xE721;">text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button icon="&#xE721;" outlined>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button icon="&#xE721;" contained>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button-group multiple>
                            <wk-button toggle icon="&#xE721;"></wk-button>
                            <wk-button toggle icon="&#xE722;"></wk-button>
                            <wk-button toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </wk-layout-column>

                    <wk-layout-column columnLarge="3">
                        <wk-button disabled>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button disabled outlined>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button disabled contained>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button-group>
                            <wk-button disabled toggle icon="&#xE721;"></wk-button>
                            <wk-button disabled toggle icon="&#xE722;"></wk-button>
                            <wk-button disabled toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </wk-layout-column>

                    <wk-layout-column columnLarge="3">
                        <wk-button disabled icon="&#xE721;">text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button disabled icon="&#xE721;" outlined>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button disabled icon="&#xE721;" contained>text</wk-button>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="3">
                        <wk-button-group multiple>
                            <wk-button disabled toggle icon="&#xE721;"></wk-button>
                            <wk-button disabled toggle icon="&#xE722;"></wk-button>
                            <wk-button disabled toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("button-component", ButtonComponent)

export default `<button-component></button-component>`