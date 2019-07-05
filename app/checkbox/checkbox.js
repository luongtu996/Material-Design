class CheckboxComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    
                    <div class="layout__column layout__column--3-large">

                        <wk-checkbox name="name" value="value" required></wk-checkbox>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <wk-checkbox indeterminate></wk-checkbox>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <wk-checkbox checked></wk-checkbox>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>

                    <div class="layout__column layout__column--3-large">

                        <wk-checkbox disabled></wk-checkbox>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <wk-checkbox disabled indeterminate></wk-checkbox>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <wk-checkbox disabled checked></wk-checkbox>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>

                </div>
            </div>
        `
    }
}
customElements.define("checkbox-component", CheckboxComponent)

export default `<checkbox-component></checkbox-component>`