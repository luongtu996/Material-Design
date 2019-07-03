class DataTableComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout" style="display:flex;align-items: stretch;height:calc(100vh - 64px - 24px - 24px);">
                <div class="layout__grid" style="display:flex;flex: 1;align-items: stretch;">
                    <div class="layout__column layout__column--12-large layout__column--8-medium layout__column--4-small" style="flex: 1;">
                    <div class="card" style="height:calc(100vh - 64px - 24px - 24px);">
                        <div class="card__toolbar">
                            <div class="card__toolbar-section card__toolbar-section--start">
                                <div class="card__toolbar-title">Title</div>
                            </div>
                            <div class="card__toolbar-section card__toolbar-section--end">
                                <div class="card__toolbar-action">&#xE8CB;</div>
                                <div class="card__toolbar-action">&#xE712;</div>
                            </div>
                        </div>
                        <table class="demo-data-table data-table">
                            <thead>
                                <tr>
                                    <th class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></th>
                                    <th class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Lorem</div>
                                        <!-- <div class="data-table__sorting data-table__sorting--asc data-table__sorting--desc"></div> -->
                                    </div></th>
                                    <th class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Libero</div>
                                        <div class="data-table__sorting data-table__sorting--asc data-table__sorting--desc"></div>
                                    </div></th>
                                    <th class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Nesciunt</div>
                                        <!-- <div class="data-table__sorting data-table__sorting--asc data-table__sorting--desc"></div> -->
                                    </div></th>
                                    <th class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Repellat</div>
                                        <!-- <div class="data-table__sorting data-table__sorting--asc data-table__sorting--desc"></div> -->
                                    </div></th>
                                    <th class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Vitae</div>
                                        <!-- <div class="data-table__sorting data-table__sorting--asc data-table__sorting--desc"></div> -->
                                    </div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Lorem</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Officiis</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Ipsum</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quis</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Qui</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Ullam</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Officiis</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Nostrum</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Voluptates</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Ipsa</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dicta</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Corrupti</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Explicabo</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Obcaecati</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Corporis</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Adipisci</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Recusandae</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Nemo</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quibusdam</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Delectus</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Id</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Voluptatibus</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Sapiente</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Reiciendis</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Ipsa</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Aperiam</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Soluta</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Nesciunt</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Consequuntur</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Aliquid</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Voluptatum</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Assumenda</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Molestias</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Blanditiis</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Repudiandae</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Ullam</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Cupiditate</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Commodi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Cum</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Eveniet</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">At</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Numquam</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Laudantium</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Ullam</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td class="data-table__cell data-table__cell--with-checkbox"><div class="data-table__item">
                                        <div class="checkbox">
                                            <input type="checkbox" class="checkbox__input">
                                            <div class="checkbox__track">
                                                <div class="checkbox__thumb"></div>
                                            </div>
                                        </div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Excepturi</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Et</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dignissimos</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Dolore</div>
                                    </div></td>
                                    <td class="data-table__cell"><div class="data-table__item">
                                        <div class="data-table__text">Quas</div>
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="card__toolbar">
                            <div class="card__toolbar-section card__toolbar-section--end">
                                <div class="card__toolbar-text">1-20 of 100</div>
                                <div class="card__toolbar-action">&#xE973;</div>
                                <div class="card__toolbar-action">&#xE974;</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("datatable-component", DataTableComponent)

export default `<datatable-component></datatable-component>`