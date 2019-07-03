class DialogComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <iframe src="./components/dialog/index.1.html" style="width: 360px;height: 640px;border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <iframe src="./components/dialog/index.2.html" style="width: 360px;height: 640px;border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <iframe src="./components/dialog/index.3.html" style="width: 360px;height: 640px;border: 0;"></iframe>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <iframe src="./components/dialog/index.4.html" style="width: 360px;height: 640px;border: 0;"></iframe>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("dialog-component", DialogComponent)

export default `<dialog-component></dialog-component>`