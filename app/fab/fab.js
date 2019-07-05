class FabComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>

                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab icon="&#xE720;"></wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab mini icon="&#xE720;"></wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4""></wk-layout-column>

                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab extended icon="&#xE720;"></wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab extended>text</wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab extended icon="&#xE720;">text</wk-fab>
                    </wk-layout-column>

                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab disabled icon="&#xE720;"></wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab disabled mini icon="&#xE720;"></wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4""></wk-layout-column>

                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab disabled extended icon="&#xE720;"></wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab disabled extended>text</wk-fab>
                    </wk-layout-column>
                    <wk-layout-column columnLarge="4" columnMedium="8" columnSmall="4">
                        <wk-fab disabled extended icon="&#xE720;">text</wk-fab>
                    </wk-layout-column>

                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("fab-component", FabComponent)

export default `<fab-component></fab-component>`