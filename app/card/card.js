class CardComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <!--  -->
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__footer">
                                <div class="card__section card__section--start card__section--vertical">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE971;</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="card" style="height: 506.5px;">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE972;</div>
                                </div>
                            </div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur omnis corporis,
                                libero recusandae doloribus consectetur earum, soluta neque corrupti qui incidunt necessitatibus
                                ipsa! Libero blanditiis, animi fugiat illo necessitatibus similique. Veniam impedit possimus
                                sint.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur omnis corporis,
                                libero recusandae doloribus consectetur earum, soluta neque corrupti qui incidunt necessitatibus
                                ipsa! Libero blanditiis, animi fugiat illo necessitatibus similique. Veniam impedit possimus
                                sint.
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur omnis corporis,
                                libero recusandae doloribus consectetur earum, soluta neque corrupti qui incidunt necessitatibus
                                ipsa! Libero blanditiis, animi fugiat illo necessitatibus similique. Veniam impedit possimus
                                sint.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">
                        <div class="card">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE8E1;</div>
                                    <div class="icon icon--actionable">&#xE8BD;</div>
                                    <div class="icon icon--actionable">&#xE72D;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__media card__media--1-1">
                                <div class="card__protection">
                                    <div class="card__primary">
                                        <div class="card__title">Title</div>
                                        <div class="card__subtitle">Subitle</div>
                                    </div>
                                    <div class="card__footer">
                                        <div class="card__section card__section--start">
                                            <div class="button"><span class="button__text">action</span></div>
                                            <div class="button"><span class="button__text">action</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card">
                            <div class="card">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE8E1;</div>
                                        <div class="icon icon--actionable">&#xE8BD;</div>
                                        <div class="icon icon--actionable">&#xE72D;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE8E1;</div>
                                        <div class="icon icon--actionable">&#xE8BD;</div>
                                        <div class="icon icon--actionable">&#xE72D;</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--80"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--120"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--160"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__content">
                                <div class="card__media card__media--240"></div>
                                <div class="card__footer">
                                    <div class="card__section card__section--start card__section--vertical">
                                        <div class="icon icon--actionable">&#xE8E1;</div>
                                        <div class="icon icon--actionable">&#xE8BD;</div>
                                        <div class="icon icon--actionable">&#xE72D;</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="icon">&#xEA37;</div>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE71C;</div>
                                        <div class="icon icon--actionable">&#xE721;</div>
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="button"><span class="button__text">add</span></div>
                                        <div class="button"><span class="button__text">remove</span></div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="card__text">1 item selected</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE973;</div>
                                    <div class="icon icon--actionable">&#xE974;</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="icon">&#xEA37;</div>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE71C;</div>
                                        <div class="icon icon--actionable">&#xE721;</div>
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="button"><span class="button__text">add</span></div>
                                        <div class="button"><span class="button__text">remove</span></div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="card__text">1 item selected</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE973;</div>
                                    <div class="icon icon--actionable">&#xE974;</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="icon">&#xEA37;</div>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE71C;</div>
                                        <div class="icon icon--actionable">&#xE721;</div>
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="button"><span class="button__text">add</span></div>
                                        <div class="button"><span class="button__text">remove</span></div>
                                    </div>
                                </div>
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__text">1 item selected</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE973;</div>
                                    <div class="icon icon--actionable">&#xE974;</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE712;</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large"></div>

                    <!--  -->
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__footer">
                                <div class="card__section card__section--start card__section--vertical">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE971;</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE972;</div>
                                </div>
                            </div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur omnis corporis,
                                libero recusandae doloribus consectetur earum, soluta neque corrupti qui incidunt necessitatibus
                                ipsa! Libero blanditiis, animi fugiat illo necessitatibus similique. Veniam impedit possimus
                                sint.
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur omnis corporis,
                                libero recusandae doloribus consectetur earum, soluta neque corrupti qui incidunt necessitatibus
                                ipsa! Libero blanditiis, animi fugiat illo necessitatibus similique. Veniam impedit possimus
                                sint.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">
                        <div class="card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE8E1;</div>
                                    <div class="icon icon--actionable">&#xE8BD;</div>
                                    <div class="icon icon--actionable">&#xE72D;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__media card__media--1-1">
                                <div class="card__protection">
                                    <div class="card__primary">
                                        <div class="card__title">Title</div>
                                        <div class="card__subtitle">Subitle</div>
                                    </div>
                                    <div class="card__footer">
                                        <div class="card__section card__section--start">
                                            <div class="button"><span class="button__text">action</span></div>
                                            <div class="button"><span class="button__text">action</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card">
                            <div class="card card--outlined">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE8E1;</div>
                                        <div class="icon icon--actionable">&#xE8BD;</div>
                                        <div class="icon icon--actionable">&#xE72D;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card card--outlined">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE8E1;</div>
                                        <div class="icon icon--actionable">&#xE8BD;</div>
                                        <div class="icon icon--actionable">&#xE72D;</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--80"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--120"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--160"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__content">
                                <div class="card__media card__media--240"></div>
                                <div class="card__footer">
                                    <div class="card__section card__section--start card__section--vertical">
                                        <div class="icon icon--actionable">&#xE8E1;</div>
                                        <div class="icon icon--actionable">&#xE8BD;</div>
                                        <div class="icon icon--actionable">&#xE72D;</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="icon">&#xEA37;</div>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE71C;</div>
                                        <div class="icon icon--actionable">&#xE721;</div>
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="button"><span class="button__text">add</span></div>
                                        <div class="button"><span class="button__text">remove</span></div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="card__text">1 item selected</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE973;</div>
                                    <div class="icon icon--actionable">&#xE974;</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="icon">&#xEA37;</div>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE71C;</div>
                                        <div class="icon icon--actionable">&#xE721;</div>
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="button"><span class="button__text">add</span></div>
                                        <div class="button"><span class="button__text">remove</span></div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="card__text">1 item selected</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE973;</div>
                                    <div class="icon icon--actionable">&#xE974;</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="icon">&#xEA37;</div>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE71C;</div>
                                        <div class="icon icon--actionable">&#xE721;</div>
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <div class="button"><span class="button__text">add</span></div>
                                        <div class="button"><span class="button__text">remove</span></div>
                                    </div>
                                </div>
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__text">1 item selected</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE973;</div>
                                    <div class="icon icon--actionable">&#xE974;</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <div class="icon icon--actionable">&#xE712;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="card card--outlined">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <div class="card__thumb"></div>
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                            <div class="card__subtitle">Subitle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <div class="button"><span class="button__text">action</span></div>
                                    <div class="button"><span class="button__text">action</span></div>
                                </div>
                                <div class="card__section card__section--end">
                                    <div class="icon icon--actionable">&#xE712;</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large"></div>

                </div>
            </div>
        `
    }
}
customElements.define("card-component", CardComponent)

export default `<card-component></card-component>`
