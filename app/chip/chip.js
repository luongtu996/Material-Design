class ChipComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--input">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Input</div>
                                <div class="chip__remove"></div>
                            </div>
                            <div class="chip chip--input">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Input</div>
                                <div class="chip__remove"></div>
                            </div>
                            <div class="chip chip--input">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Input</div>
                                <div class="chip__remove"></div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--choice" activated>
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Choice</div>
                            </div>
                            <div class="chip chip--choice">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Choice</div>
                            </div>
                            <div class="chip chip--choice">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Choice</div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--filter" selected>
                                <div class="chip__checkmark"></div>
                                <div class="chip__text">Filter</div>
                            </div>
                            <div class="chip chip--filter" selected>
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__checkmark"></div>
                                <div class="chip__text">Filter</div>
                            </div>
                            <div class="chip chip--filter">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__checkmark"></div>
                                <div class="chip__text">Filter</div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--action">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Action</div>
                            </div>
                            <div class="chip chip--action">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Action</div>
                            </div>
                            <div class="chip chip--action">
                                <div class="chip__thumb" style="background-image: url(https://i.pravatar.cc/300)"></div>
                                <div class="chip__text">Action</div>
                            </div>
                        </div>
                    </div>

                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--outlined chip--input">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Input</div>
                                <div class="chip__remove"></div>
                            </div>
                            <div class="chip chip--outlined chip--input">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Input</div>
                                <div class="chip__remove"></div>
                            </div>
                            <div class="chip chip--outlined chip--input">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Input</div>
                                <div class="chip__remove"></div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--outlined chip--choice" activated>
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Choice</div>
                            </div>
                            <div class="chip chip--outlined chip--choice">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Choice</div>
                            </div>
                            <div class="chip chip--outlined chip--choice">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Choice</div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                            <div class="demo-chip-group chip-group">
                                <div class="chip chip--outlined chip--filter" selected>
                                <div class="chip__checkmark"></div>
                                <div class="chip__text">Filter</div>
                            </div>
                            <div class="chip chip--outlined chip--filter" selected>
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__checkmark"></div>
                                <div class="chip__text">Filter</div>
                            </div>
                            <div class="chip chip--outlined chip--filter">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__checkmark"></div>
                                <div class="chip__text">Filter</div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
                        <div class="demo-chip-group chip-group">
                            <div class="chip chip--outlined chip--action">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Action</div>
                            </div>
                            <div class="chip chip--outlined chip--action">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Action</div>
                            </div>
                            <div class="chip chip--outlined chip--action">
                                <div class="chip__thumb">&#xE722;</div>
                                <div class="chip__text">Action</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `
    }
}
customElements.define("chip-component", ChipComponent)

export default `<chip-component></chip-component>`