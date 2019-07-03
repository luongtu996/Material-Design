class TypographyComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small">
                    
                        <h1 class="typography typography--h1">H1</h1>
                        <h2 class="typography typography--h2">H2</h2>
                        <h3 class="typography typography--h3">H3</h3>
                        <h4 class="typography typography--h4">H4</h4>
                        <h5 class="typography typography--h5">H5</h5>
                        <h6 class="typography typography--h6">H6</h6>
                        <h1 class="typography typography--subtitle1">Subtitle1</h1>
                        <h2 class="typography typography--subtitle2">Subtitle2</h2>
                        <p class="typography typography--body1">Body1</p>
                        <p class="typography typography--body2">Body2</p>
                        <p class="typography typography--button">BUTTON</p>
                        <p class="typography typography--caption">Caption</p>
                        <p class="typography typography--overline">OVERLINE</p>

                    </div>
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small"></div>
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small"></div>
                </div>
            </div>
        `
    }
}
customElements.define("typography-component", TypographyComponent)

export default `<typography-component></typography-component>`