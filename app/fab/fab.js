class FabComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="fab">
                            <div class="fab__icon">&#xE720;</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="fab fab--mini">
                            <div class="fab__icon">&#xE720;</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>

                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="fab fab--extended">
                            <div class="fab__icon">&#xE720;</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="fab fab--extended">
                            <div class="fab__text">TEXT</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="fab fab--extended">
                            <div class="fab__icon">&#xE720;</div>
                            <div class="fab__text">TEXT</div>
                        </div>
                    </div>

                </div>
            </div>
        `
    }
}
customElements.define("fab-component", FabComponent)

export default `<fab-component></fab-component>`