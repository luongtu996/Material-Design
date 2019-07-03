class TextFieldComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
            
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-icon">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-icon">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__icon text-field__icon--control">&#xE720;</div>
                                <div class="text-field__icon text-field__icon--error"></div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-meta">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__meta">Rp&nbsp;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-meta">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__meta">&nbsp;.00</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
            
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-label">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-icon text-field--with-label">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-icon text-field--with-label">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-meta text-field--with-label">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__meta">Rp&nbsp;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-meta text-field--with-label">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__meta">&nbsp;.00</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
            
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-icon text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-icon text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-meta text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__meta">Rp&nbsp;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-meta text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__meta">&nbsp;.00</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
            
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-label text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-icon text-field--with-label text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-icon text-field--with-label text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__icon">&#xE720;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-start-meta text-field--with-label text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--start">
                                <div class="text-field__meta">Rp&nbsp;</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small">
            
                        <div class="text-field text-field--with-end-meta text-field--with-label text-field--outlined">
                            <input type="email" class="text-field__input" placeholder="Placeholder" title="" required>
                            <div class="text-field__surface"></div>
                            <div class="text-field__label">Label</div>
                            <div class="text-field__section text-field__section--end">
                                <div class="text-field__meta">&nbsp;.00</div>
                            </div>
                            <div class="text-field__message">
                                <div class="text-field__message-helper">Helper message</div>
                                <div class="text-field__message-error">Error message</div>
                                <div class="text-field__message-counter">0/10</div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--4-large layout__column--8-medium layout__column--4-small"></div>
            
                </div>
            </div>
        `
    }
}
customElements.define("textfield-component", TextFieldComponent)

export default `<textfield-component></textfield-component>`