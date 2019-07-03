class RadioComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="radio">
                            <input type="radio" class="radio__input" name="radio">
                            <div class="radio__track">
                                <div class="radio__thumb"></div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <div class="radio">
                            <input type="radio" class="radio__input" name="radio" checked>
                            <div class="radio__track">
                                <div class="radio__thumb"></div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                </div>
            </div>
        `
    }
}
customElements.define("radio-component", RadioComponent)

export default `<radio-component></radio-component>`