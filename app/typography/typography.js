class TypographyComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <wk-layout>
                <wk-layout-grid>
                    <wk-layout-column columnLarge="12" columnMedium="8" columnSmall="4">

                        <h1 wkTypography="h1">Typography</h1>
                        <h2 wkTypography="h2">Typography</h2>
                        <h3 wkTypography="h3">Typography</h3>
                        <h4 wkTypography="h4">Typography</h4>
                        <h5 wkTypography="h5">Typography</h5>
                        <h6 wkTypography="h6">Typography</h6>
                        <h1 wkTypography="subtitle1">Typography</h1>
                        <h2 wkTypography="subtitle2">Typography</h2>
                        <p wkTypography="body1">Typography</p>
                        <p wkTypography="body2">Typography</p>
                        <p wkTypography="button">Typography</p>
                        <p wkTypography="caption">Typography</p>
                        <p wkTypography="overline">Typography</p>

                    </wk-layout-column>
                </wk-layout-grid>
            </wk-layout>
        `
    }
}
customElements.define("typography-component", TypographyComponent)

export default `<typography-component></typography-component>`