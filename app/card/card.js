class CardComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">

                    <!--  -->
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE971;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card" style="height: 506.5px;">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE972;</wk-icon>
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

                        <div class="demo-card card">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">
                        <div class="demo-card card">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE8E1;</wk-icon>
                                    <wk-icon actionable>&#xE8BD;</wk-icon>
                                    <wk-icon actionable>&#xE72D;</wk-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__media card__media--1-1">
                                <div class="card__protection">
                                    <div class="card__primary">
                                        <div class="card__title">Title</div>
                                        <div class="card__subtitle">Subitle</div>
                                    </div>
                                    <div class="card__footer">
                                        <div class="card__section card__section--start">
                                            <wk-button>Action</wk-button>
                                            <wk-button>Action</wk-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card-group">
                            <div class="demo-card card">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE8E1;</wk-icon>
                                        <wk-icon actionable>&#xE8BD;</wk-icon>
                                        <wk-icon actionable>&#xE72D;</wk-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="demo-card card">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE8E1;</wk-icon>
                                        <wk-icon actionable>&#xE8BD;</wk-icon>
                                        <wk-icon actionable>&#xE72D;</wk-icon>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--80"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--120"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--160"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__content">
                                <div class="card__media card__media--240"></div>
                                <div class="card__footer">
                                    <div class="card__section card__section--start card__section--vertical">
                                        <wk-icon actionable>&#xE8E1;</wk-icon>
                                        <wk-icon actionable>&#xE8BD;</wk-icon>
                                        <wk-icon actionable>&#xE72D;</wk-icon>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <wk-icon>&#xEA37;</wk-icon>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE71C;</wk-icon>
                                        <wk-icon actionable>&#xE721;</wk-icon>
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-button>add</wk-button>
                                        <wk-button>remove</wk-button>
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
                                    <wk-icon actionable>&#xE973;</wk-icon>
                                    <wk-icon actionable>&#xE974;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-icon>&#xEA37;</wk-icon>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE71C;</wk-icon>
                                        <wk-icon actionable>&#xE721;</wk-icon>
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <wk-button>add</wk-button>
                                        <wk-button>remove</wk-button>
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
                                    <wk-icon actionable>&#xE973;</wk-icon>
                                    <wk-icon actionable>&#xE974;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-icon>&#xEA37;</wk-icon>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE71C;</wk-icon>
                                        <wk-icon actionable>&#xE721;</wk-icon>
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-button>add</wk-button>
                                        <wk-button>remove</wk-button>
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
                                    <wk-icon actionable>&#xE973;</wk-icon>
                                    <wk-icon actionable>&#xE974;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
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
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE712;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large"></div>
                    <div class="layout__column layout__column--3-large"></div>

                    <!--  -->
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE971;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__primary">
                                <div class="card__title">Title</div>
                                <div class="card__subtitle">Subitle</div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE972;</wk-icon>
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

                        <div class="demo-card card card--outlined">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">
                        <div class="demo-card card card--outlined">
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__footer">
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE8E1;</wk-icon>
                                    <wk-icon actionable>&#xE8BD;</wk-icon>
                                    <wk-icon actionable>&#xE72D;</wk-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__media card__media--1-1">
                                <div class="card__protection">
                                    <div class="card__primary">
                                        <div class="card__title">Title</div>
                                        <div class="card__subtitle">Subitle</div>
                                    </div>
                                    <div class="card__footer">
                                        <div class="card__section card__section--start">
                                            <wk-button>Action</wk-button>
                                            <wk-button>Action</wk-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card-group">
                            <div class="demo-card card card--outlined">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE8E1;</wk-icon>
                                        <wk-icon actionable>&#xE8BD;</wk-icon>
                                        <wk-icon actionable>&#xE72D;</wk-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="demo-card card card--outlined">
                                <div class="card__media card__media--1-1">
                                    <div class="card__protection">
                                        <div class="card__primary">
                                            <div class="card__title">Title</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE8E1;</wk-icon>
                                        <wk-icon actionable>&#xE8BD;</wk-icon>
                                        <wk-icon actionable>&#xE72D;</wk-icon>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--80"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--120"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__content">
                                <div class="card__primary">
                                    <div class="card__title">Title</div>
                                    <div class="card__subtitle">Subitle</div>
                                </div>
                                <div class="card__media card__media--160"></div>
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__content">
                                <div class="card__media card__media--240"></div>
                                <div class="card__footer">
                                    <div class="card__section card__section--start card__section--vertical">
                                        <wk-icon actionable>&#xE8E1;</wk-icon>
                                        <wk-icon actionable>&#xE8BD;</wk-icon>
                                        <wk-icon actionable>&#xE72D;</wk-icon>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__header">
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <wk-icon>&#xEA37;</wk-icon>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE71C;</wk-icon>
                                        <wk-icon actionable>&#xE721;</wk-icon>
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-button>add</wk-button>
                                        <wk-button>remove</wk-button>
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
                                    <wk-icon actionable>&#xE973;</wk-icon>
                                    <wk-icon actionable>&#xE974;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-icon>&#xEA37;</wk-icon>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE71C;</wk-icon>
                                        <wk-icon actionable>&#xE721;</wk-icon>
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                                <div class="card__row">
                                    <div class="card__section card__section--start">
                                        <wk-button>add</wk-button>
                                        <wk-button>remove</wk-button>
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
                                    <wk-icon actionable>&#xE973;</wk-icon>
                                    <wk-icon actionable>&#xE974;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
                            <div class="card__header">
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-icon>&#xEA37;</wk-icon>
                                        <div class="card__title">Title</div>
                                    </div>
                                    <div class="card__section card__section--end">
                                        <wk-icon actionable>&#xE71C;</wk-icon>
                                        <wk-icon actionable>&#xE721;</wk-icon>
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                                <div class="card__row" hidden>
                                    <div class="card__section card__section--start">
                                        <wk-button>add</wk-button>
                                        <wk-button>remove</wk-button>
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
                                    <wk-icon actionable>&#xE973;</wk-icon>
                                    <wk-icon actionable>&#xE974;</wk-icon>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
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
                                        <wk-icon actionable>&#xE712;</wk-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="card__media card__media--16-9"></div>
                            <div class="card__body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate.
                            </div>
                            <div class="card__footer">
                                <div class="card__section card__section--start">
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout__column layout__column--3-large">

                        <div class="demo-card card card--outlined">
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
                                    <wk-button>Action</wk-button>
                                    <wk-button>Action</wk-button>
                                </div>
                                <div class="card__section card__section--end">
                                    <wk-icon actionable>&#xE712;</wk-icon>
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
