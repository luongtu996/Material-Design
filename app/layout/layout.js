class LayoutComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout style="margin-bottom: 64px;">
                <wk-layout-grid>
                    <wk-layout-column column="1" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="11" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="2" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="10" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="3" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="9" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="4" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="8" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="5" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="7" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="6" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="6" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column column="12" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                </wk-layout-grid>
            </wk-layout>

            <wk-layout style="margin-bottom: 64px;">
                <wk-layout-grid>
                    <wk-layout-column columnLarge="1" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="11" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="2" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="10" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="3" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="9" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="4" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="8" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="5" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="7" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="6" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="6" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnLarge="12" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                </wk-layout-grid>
            </wk-layout>

            <wk-layout style="margin-bottom: 64px;">
                <wk-layout-grid>
                    <wk-layout-column columnMedium="1" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="7" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="2" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="6" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="3" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="5" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="4" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="4" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnMedium="8" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                </wk-layout-grid>
            </wk-layout>

            <wk-layout style="margin-bottom: 64px;">
                <wk-layout-grid>
                    <wk-layout-column columnSmall="1" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnSmall="3" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnSmall="2" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnSmall="2" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                    <wk-layout-column columnSmall="4" style="height: 64px; background-color: #c5c5c5;"></wk-layout-column>
                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("layout-component", LayoutComponent)

export default `<layout-component></layout-component>`