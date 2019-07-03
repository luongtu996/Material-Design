class BannerComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/banner/index.1.html" style="width: 360px;height: calc(640px / 2);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/banner/index.2.html" style="width: 360px;height: calc(640px / 2);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/banner/index.3.html" style="width: 360px;height: calc(640px / 2);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/banner/index.4.html" style="width: 1024px;height: calc(768px / 2);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/banner/index.5.html" style="width: 1024px;height: calc(768px / 2);border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small">
                        <iframe src="../components/banner/index.6.html" style="width: 1024px;height: calc(768px / 2);border: 0;"></iframe>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("banner-component", BannerComponent)

export default `<banner-component></banner-component>`