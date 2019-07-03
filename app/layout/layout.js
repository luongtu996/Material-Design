class LayoutComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout" style="margin-bottom: 64px;">
                <div class="layout__grid">
                    <div class="layout__column layout__column--1" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--11" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--2" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--10" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--3" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--9" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--4" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--8" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--5" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--7" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--6" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--6" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--12" style="height: 64px; background-color: #c5c5c5;"></div>
                </div>
            </div>

            <div class="layout" style="margin-bottom: 64px;">
                <div class="layout__grid">
                    <div class="layout__column layout__column--1-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--11-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--2-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--10-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--3-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--9-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--4-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--8-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--5-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--7-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--6-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--6-large" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--12-large" style="height: 64px; background-color: #c5c5c5;"></div>
                </div>
            </div>

            <div class="layout" style="margin-bottom: 64px;">
                <div class="layout__grid">
                    <div class="layout__column layout__column--1-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--7-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--2-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--6-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--3-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--5-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--4-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--4-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--8-medium" style="height: 64px; background-color: #c5c5c5;"></div>
                </div>
            </div>

            <div class="layout" style="margin-bottom: 64px;">
                <div class="layout__grid">
                    <div class="layout__column layout__column--1-small" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--3-small" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--2-small" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--2-small" style="height: 64px; background-color: #c5c5c5;"></div>
                    <div class="layout__column layout__column--4-small" style="height: 64px; background-color: #c5c5c5;"></div>
                </div>
            </div>
        `
    }
}
customElements.define("layout-component", LayoutComponent)

export default `<layout-component></layout-component>`