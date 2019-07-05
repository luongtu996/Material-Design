class AppComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div id="nav" class="navigation-drawer">
                <div class="navigation-drawer__header">
                    <div class="navigation-drawer__title">Material Design</div>
                </div>
                <div class="navigation-drawer__body">
                <ul class="list list--with-action">
                    <li class="list__row">
                        <div class="list__subheader">Foundation</div>
                        <ul class="list list--with-action">
                            <!--<li class="list__row">
                                <a href="#/foundation" class="list__item" activated>
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Foundation</div>
                                </a>
                            </li>-->
                            <li class="list__row">
                                <a href="#/elevation" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Elevation</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/layout" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Layout</div>
                                </a>
                            </li>
                            <!--<li class="list__row">
                                <a href="#/color" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Color</div>
                                </a>
                            </li>-->
                            <li class="list__row">
                                <a href="#/typography" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Typography</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/icon" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Icon</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--<li class="list__row">
                        <div class="list__divider"></div>
                        <div class="list__subheader">Interaction</div>
                        <ul class="list list--with-action">
                            <li class="list__row">
                                <a href="#/ripple" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Ripple</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/draggable" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Draggable</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/droppable" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Droppable</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/resizable" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Resizable</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/selectable" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Selectable</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/sortable" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Sortable</div>
                                </a>
                            </li>
                        </ul>
                    </li>-->
                    <li class="list__row">
                        <div class="list__divider"></div>
                        <div class="list__subheader">Components</div>
                        <ul class="list list--with-action">
                            <li class="list__row">
                                <a href="#/bottom-app-bar" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Bottom App Bar</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/top-app-bar" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Top App Bar</div>
                                </a>
                            </li>
                            <!--<li class="list__row">
                                <a href="#/backdrop" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Backdrop</div>
                                </a>
                            </li>-->
                            <li class="list__row">
                                <a href="#/banner" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Banner</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/bottom-navigation" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Bottom Navigation</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/button" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Button</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/fab" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Fab</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/card" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Card</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/chip" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Chip</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/data-table" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Data Table</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/dialog" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Dialog</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/divider" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Divider</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/image-list" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Image List</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/list" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">List</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/menu" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Menu</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/navigation-drawer" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Navigation Drawer</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/picker" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Picker</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/progress" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Progress</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/checkbox" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Checkbox</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/radio" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Radio</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/switch" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Switch</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/bottom-sheet" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Bottom Sheet</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/side-sheet" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Side Sheet</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/slider" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Slider</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/snackbar" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Snackbar</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/tab" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Tab</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/text-field" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Text Field</div>
                                </a>
                            </li>
                            <li class="list__row">
                                <a href="#/tooltip" class="list__item">
                                    <div class="list__icon">&#xE950;</div>
                                    <div class="list__text">Tooltip</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>

            <div id="navScrimTrigger" class="navigation-drawer-scrim">
            </div>

            <div class="top-app-bar">
                <div class="top-app-bar__row">
                    <div class="top-app-bar__section top-app-bar__section--start">
                        <div id="navTrigger" class="top-app-bar__action top-app-bar__action--navigation">&#xE700;</div>
                        <div class="top-app-bar__title">Material Design</div>
                    </div>
                    <div class="top-app-bar__section top-app-bar__section--center"></div>
                    <div class="top-app-bar__section top-app-bar__section--end">
                        <div class="top-app-bar__action">&#xE721;</div>
                        <div class="top-app-bar__action top-app-bar__action--menu">&#xE712;</div>
                    </div>
                </div>
                <div class="top-app-bar__row"></div>
            </div>

            <main class="viewport">
                <wk-router></wk-router>
            </main>
        `

        let nav = this.querySelector("#nav")
        let navTrigger = this.querySelector("#navTrigger")
        let navScrimTrigger = this.querySelector("#navScrimTrigger")

        navTrigger.addEventListener("click", click)
        navScrimTrigger.addEventListener("click", click)

        function click() {
            if (nav.classList.contains("navigation-drawer--closed")) {
                nav.classList.remove("navigation-drawer--closed")
            } else {
                nav.classList.add("navigation-drawer--closed")
            }
        }
    }
}
customElements.define("app-component", AppComponent)

export default `<app-component></app-component>`