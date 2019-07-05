class TypographyComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>
                    <wk-layout-column columnLarge="12" columnMedium="8" columnSmall="4">

                        <h1 wkTypography="h1">H1</h1>
                        <h2 wkTypography="h2">H2</h2>
                        <h3 wkTypography="h3">H3</h3>
                        <h4 wkTypography="h4">H4</h4>
                        <h5 wkTypography="h5">H5</h5>
                        <h6 wkTypography="h6">H6</h6>
                        <h1 wkTypography="subtitle1">Subtitle1</h1>
                        <h2 wkTypography="subtitle2">Subtitle2</h2>
                        <p wkTypography="body1">Body1</p>
                        <p wkTypography="body2">Body2</p>
                        <p wkTypography="button">BUTTON</p>
                        <p wkTypography="caption">Caption</p>
                        <p wkTypography="overline">OVERLINE</p>

                    </wk-layout-column>
                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("typography-component", TypographyComponent)

export default `<typography-component></typography-component>`