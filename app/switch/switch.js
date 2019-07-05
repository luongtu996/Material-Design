class SwitchComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    
                    <div class="layout__column layout__column--3-large">

                        <wk-switch name="switch1" value="value" required></wk-switch>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large">

                        <wk-switch name="switch1" checked></wk-switch>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>

                    <div class="layout__column layout__column--3-large">

                        <wk-switch name="switch2" disabled></wk-switch>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large">

                        <wk-switch name="switch2" disabled checked></wk-switch>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>

                </div>
            </div>
        `
    }
}
customElements.define("switch-component", SwitchComponent)

export default `<switch-component></switch-component>`