class ButtonComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button">
                            <div class="button__text">text</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button button--outlined">
                            <div class="button__text">text</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button button--contained">
                            <div class="button__text">text</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button-group">
                            <div class="button button--toggle" selected>
                                <div class="button__icon">&#xE719;</div>
                            </div>
                            <div class="button button--toggle">
                                <div class="button__icon">&#xE720;</div>
                            </div>
                            <div class="button button--toggle">
                                <div class="button__icon">&#xE722;</div>
                            </div>
                        </div>
                    </div>

                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button">
                            <div class="button__icon">&#xE720;</div>
                            <div class="button__text">text</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button button--outlined">
                            <div class="button__icon">&#xE720;</div>
                            <div class="button__text">text</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button button--contained">
                            <div class="button__icon">&#xE720;</div>
                            <div class="button__text">text</div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--4-medium layout__column--2-small">
                        <div class="button-group" multiple>
                            <div class="button button--toggle" selected>
                                <div class="button__icon">&#xE719;</div>
                            </div>
                            <div class="button button--toggle">
                                <div class="button__icon">&#xE720;</div>
                            </div>
                            <div class="button button--toggle">
                                <div class="button__icon">&#xE722;</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `
    }
}
customElements.define("button-component", ButtonComponent)

export default `<button-component></button-component>`