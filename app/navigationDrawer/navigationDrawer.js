class NavigationDrawerComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/navigation-drawer/index.1.html" style="width: 360px;height: calc(640px - 24px);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/navigation-drawer/index.2.html" style="width: 360px;height: calc(640px - 24px);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/navigation-drawer/index.3.html" style="width: 360px;height: calc(640px - 24px);border: 0;"></iframe>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("navigationdrawer-component", NavigationDrawerComponent)

export default `<navigationdrawer-component></navigationdrawer-component>`