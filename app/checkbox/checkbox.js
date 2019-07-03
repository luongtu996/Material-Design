class CheckboxComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="checkbox">
                            <input type="checkbox" class="checkbox__input">
                            <div class="checkbox__track">
                                <div class="checkbox__thumb"></div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="checkbox">
                            <input type="checkbox" class="checkbox__input" indeterminate>
                            <div class="checkbox__track">
                                <div class="checkbox__thumb"></div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="checkbox">
                            <input type="checkbox" class="checkbox__input" checked>
                            <div class="checkbox__track">
                                <div class="checkbox__thumb"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("checkbox-component", CheckboxComponent)

export default `<checkbox-component></checkbox-component>`