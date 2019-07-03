class ListComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <ul class="demo-list list">
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__text">Single-line item longer text</div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__icon">&#xE720;</div>
                                    <div class="list__text">Single-line item</div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--circle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--square"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--rectangle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                        </ul>
            
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <ul class="demo-list list list--with-action">
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__text">Single-line item longer text</div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__icon">&#xE720;</div>
                                    <div class="list__text">Single-line item</div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--circle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--square"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--rectangle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">Single-line item</div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                        </ul>
            
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <ul class="demo-list list list--two-line">
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__supporting">
                                        <div class="list__text">
                                            <div class="list__text-primary">Two-line item</div>
                                            <div class="list__text-secondary">Secondary text</div>
                                        </div>
                                        <div class="list__meta">meta</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__text">
                                        <div class="list__text-overline">OVERLINE</div>
                                        <div class="list__text-primary">Two-line item</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__icon">&#xE720;</div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Two-line item</div>
                                        <div class="list__text-secondary">Secondary text</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--circle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Two-line item</div>
                                        <div class="list__text-secondary">Secondary text</div>
                                    </div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--square"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Two-line item</div>
                                        <div class="list__text-secondary">Secondary text</div>
                                    </div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--rectangle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Two-line item</div>
                                        <div class="list__text-secondary">Secondary text</div>
                                    </div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                        </ul>
            
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <ul class="demo-list list list--three-line">
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__supporting">
                                        <div class="list__text">
                                            <div class="list__text-primary">Three-line item</div>
                                            <div class="list__text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing
                                                elit. Enim, quia corrupti.</div>
                                        </div>
                                        <div class="list__meta">meta</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__text">
                                        <div class="list__text-overline">OVERLINE</div>
                                        <div class="list__text-primary">Three-line item</div>
                                        <div class="list__text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Enim, quia corrupti.</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__icon">&#xE720;</div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Three-line item</div>
                                        <div class="list__text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Enim, quia corrupti.</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--circle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Three-line item</div>
                                        <div class="list__text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Enim, quia corrupti.</div>
                                    </div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--square"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Three-line item</div>
                                        <div class="list__text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Enim, quia corrupti.</div>
                                    </div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                            <li class="list__row">
                                <div class="list__item">
                                    <div class="list__thumb list__thumb--rectangle"
                                        style="background-image: url(https://i.pravatar.cc/300)"></div>
                                    <div class="list__text">
                                        <div class="list__text-primary">Three-line item</div>
                                        <div class="list__text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Enim, quia corrupti.</div>
                                    </div>
                                    <div class="list__action"></div>
                                </div>
                            </li>
                        </ul>
            
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("list-component", ListComponent)

export default `<list-component></list-component>`