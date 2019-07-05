class ElevationComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>
                    <wk-layout-column column="2" wkElevation="0" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="1" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="2" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="3" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="4" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="5" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="6" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="7" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="8" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="9" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="10" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="11" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="12" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="13" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="14" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="15" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="16" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="17" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="18" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="19" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="20" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="21" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="22" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="23" style="height: calc(64px * 3);"></wk-layout-column>
                    <wk-layout-column column="2" wkElevation="24" style="height: calc(64px * 3);"></wk-layout-column>
                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("elevation-component", ElevationComponent)

export default `<elevation-component></elevation-component>`