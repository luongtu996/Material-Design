class FabComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <wk-fab icon="&#xE720;"></wk-fab>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <wk-fab mini icon="&#xE720;"></wk-fab>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>

                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <wk-fab extended icon="&#xE720;"></wk-fab>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <wk-fab extended>text</wk-fab>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <wk-fab extended icon="&#xE720;">text</wk-fab>
                    </div>

                </div>
            </div>
        `
    }
}
customElements.define("fab-component", FabComponent)

export default `<fab-component></fab-component>`