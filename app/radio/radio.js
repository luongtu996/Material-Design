class RadioComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    
                    <div class="layout__column layout__column--3-large">

                        <wk-radio name="radio1" value="value" required></wk-radio>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large">

                        <wk-radio name="radio1" checked></wk-radio>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>

                    <div class="layout__column layout__column--3-large">

                        <wk-radio name="radio2" disabled></wk-radio>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large">

                        <wk-radio name="radio2" disabled checked></wk-radio>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>

                </div>
            </div>
        `
    }
}
customElements.define("radio-component", RadioComponent)

export default `<radio-component></radio-component>`