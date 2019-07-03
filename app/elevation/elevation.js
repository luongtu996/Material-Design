class ElevationComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--2 elevation--0" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--1" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--2" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--3" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--4" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--5" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--6" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--7" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--8" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--9" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--10" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--11" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--12" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--13" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--14" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--15" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--16" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--17" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--18" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--19" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--20" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--21" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--22" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--23" style="height: calc(64px * 3);"></div>
                    <div class="layout__column layout__column--2 elevation--24" style="height: calc(64px * 3);"></div>
                </div>
            </div>
        `
    }
}
customElements.define("elevation-component", ElevationComponent)

export default `<elevation-component></elevation-component>`