class ButtonComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button outlined>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button contained>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button-group>
                            <wk-button toggle icon="&#xE721;"></wk-button>
                            <wk-button toggle icon="&#xE722;"></wk-button>
                            <wk-button toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </div>

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button icon="&#xE721;">text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button icon="&#xE721;" outlined>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button icon="&#xE721;" contained>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button-group multiple>
                            <wk-button toggle icon="&#xE721;"></wk-button>
                            <wk-button toggle icon="&#xE722;"></wk-button>
                            <wk-button toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </div>

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button disabled>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button disabled outlined>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button disabled contained>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button-group>
                            <wk-button disabled toggle icon="&#xE721;"></wk-button>
                            <wk-button disabled toggle icon="&#xE722;"></wk-button>
                            <wk-button disabled toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </div>

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button disabled icon="&#xE721;">text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button disabled icon="&#xE721;" outlined>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button disabled icon="&#xE721;" contained>text</wk-button>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <wk-button-group multiple>
                            <wk-button disabled toggle icon="&#xE721;"></wk-button>
                            <wk-button disabled toggle icon="&#xE722;"></wk-button>
                            <wk-button disabled toggle icon="&#xE723;"></wk-button>
                        </wk-button-group>
                    </div>

                </div>
            </div>
        `
    }
}
customElements.define("button-component", ButtonComponent)

export default `<button-component></button-component>`