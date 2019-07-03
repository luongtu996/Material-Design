class ProgressComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <div class="progress" style="--progress-value: 75;"></div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <div class="progress" indeterminate></div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
                    
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <div class="progress progress--circular" style="--progress-value: 75;">
                            <svg viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="18" />
                            </svg>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
                    
                        <div class="progress progress--circular" indeterminate>
                            <svg viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="18" />
                            </svg>
                        </div>

                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>

                </div>
            </div>
        `
    }
}
customElements.define("progress-component", ProgressComponent)

export default `<progress-component></progress-component>`