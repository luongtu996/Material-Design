class FoundationComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                </div>
            </div>
        `
    }
}
customElements.define("foundation-component", FoundationComponent)

export default `<foundation-component></foundation-component>`