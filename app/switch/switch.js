class SwitchComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <div class="switch">
                            <input type="checkbox" class="switch__input">
                            <div class="switch__track">
                                <div class="switch__thumb"></div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <div class="switch">
                            <input type="checkbox" class="switch__input" checked>
                            <div class="switch__track">
                                <div class="switch__thumb"></div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                </div>
            </div>
        `
    }
}
customElements.define("switch-component", SwitchComponent)

export default `<switch-component></switch-component>`