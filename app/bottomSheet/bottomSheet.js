class BottomSheetComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <iframe src="../components/bottom-sheet/index.1.html" style="width: 360px;height: 640px;border: 0;"></iframe>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <iframe src="../components/bottom-sheet/index.2.html" style="width: 360px;height: 640px;border: 0;"></iframe>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                </div>
            </div>
        `
    }
}
customElements.define("bottomsheet-component", BottomSheetComponent)

export default `<bottomsheet-component></bottomsheet-component>`