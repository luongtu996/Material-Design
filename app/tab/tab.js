class TabComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <div class="tab-bar" style="width: 360px;">
                            <div class="tab" activated>
                                <div class="tab__text">Text 1</div>
                            </div>
                            <div class="tab">
                                <div class="tab__text">Text 2</div>
                            </div>
                            <div class="tab">
                                <div class="tab__text">Text 3</div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <div class="tab-bar" style="width: 360px;">
                            <div class="tab" activated>
                                <div class="tab__icon">&#xE720;</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE721;</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE722;</div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <div class="tab-bar" style="width: 360px;">
                            <div class="tab" activated>
                                <div class="tab__icon">&#xE720;</div>
                                <div class="tab__text">Text 1</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE721;</div>
                                <div class="tab__text">Text 2</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE722;</div>
                                <div class="tab__text">Text 3</div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <div class="tab-bar tab-bar--scrollable" style="width: 360px;">
                            <div class="tab" activated>
                                <div class="tab__text">Text 1</div>
                            </div>
                            <div class="tab">
                                <div class="tab__text">Text 2</div>
                            </div>
                            <div class="tab">
                                <div class="tab__text">Text 3</div>
                            </div>
                            <div class="tab">
                                <div class="tab__text">Text 4</div>
                            </div>
                            <div class="tab">
                                <div class="tab__text">Text 5</div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <div class="tab-bar tab-bar--scrollable" style="width: 360px;">
                            <div class="tab" activated>
                                <div class="tab__icon">&#xE720;</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE721;</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE722;</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE723;</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE724;</div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">

                        <div class="tab-bar tab-bar--scrollable" style="width: 360px;">
                            <div class="tab" activated>
                                <div class="tab__icon">&#xE720;</div>
                                <div class="tab__text">Text 1</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE721;</div>
                                <div class="tab__text">Text 2</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE722;</div>
                                <div class="tab__text">Text 3</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE723;</div>
                                <div class="tab__text">Text 4</div>
                            </div>
                            <div class="tab">
                                <div class="tab__icon">&#xE724;</div>
                                <div class="tab__text">Text 5</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("tab-component", TabComponent)

export default `<tab-component></tab-component>`