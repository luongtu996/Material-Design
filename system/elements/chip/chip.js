import './chip-group.js'
import Ripple from '../ripple/ripple.js';

class WKChip extends HTMLElement {

    constructor() {
        super()

        if (!this.text && this.textContent) {
            this.text = this.textContent
        }

        this.template()
    }

    template() {
        this.innerHTML = `
        ${this.thumb?`<img class="chip__thumb" src="${this.thumb}">`:``}
        ${this.icon?`<span class="chip__icon icon">${this.icon}</span>`:``}
        ${this.filter?`<span class="chip__check">
            <span class="chip__mark"></span>
        </span>`:``}
        ${this.text?`<span class="chip__text">${this.text}</span>`:``}
        ${this.action?`<span class="chip__action"></span>`:``}
        `
    }

    connectedCallback() { 
        new Ripple({
            element: this
        })

        if (this.filter) {
            this.addEventListener('click', this.filterClick.bind(this))
        }
        
        if (this.choice) {
            this.addEventListener('click', this.choiceClick.bind(this))
        }
        
        if (this.action) {
            this.chipAction = this.querySelector('.chip__action')
            this.chipAction.addEventListener('click', this.actionClick.bind(this))
        }
    }

    filterClick(event) {
        this.selected = !this.selected

        this.dispatchEvent(new CustomEvent('onFilterClick', {
            detail: this
        }))
    }
    
    choiceClick(event) {
        Array.from(this.parentNode.children).forEach(chip => {
            chip.activated = false
        })

        this.activated = !this.activated

        this.dispatchEvent(new CustomEvent('onChoiceClick', {
            detail: this
        }))
    }

    actionClick(event) {
        this.remove()

        this.dispatchEvent(new CustomEvent('onActionClick', {
            detail: this
        }))
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        if ([
            'thumb',
            'icon',
            'text',
            'action',
            'filter',
        ].includes(name)) {
            this.template()
        }
    }

    static get observedAttributes() {
        return [
            'thumb',
            'icon',
            'text',
            'action',
            'disabled',
            'filter',
            'selected',
            'choice',
            'activated',
            'outlined',
        ]
    }

    get thumb() { return this.getAttribute('thumb') }
    set thumb(value) { this.setAttribute('thumb', value) }

    get icon() { return this.getAttribute('icon') }
    set icon(value) { this.setAttribute('icon', value) }

    get text() { return this.getAttribute('text') }
    set text(value) { this.setAttribute('text', value) }

    get action() { return this.hasAttribute('action') }
    set action(value) { this.setAttribute('action', '') }

    get disabled() { return this.hasAttribute('disabled') }
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', '')
        }
        else {
            this.removeAttribute('disabled')
        }
    }
    
    get filter() { return this.hasAttribute('filter') }
    set filter(value) { this.setAttribute('filter', '') }

    get selected() { return this.hasAttribute('selected') }
    set selected(value) {
        if (value) {
            this.setAttribute('selected', '')
        }
        else {
            this.removeAttribute('selected')
        }
    }

    get choice() { return this.hasAttribute('choice') }
    set choice(value) { this.setAttribute('choice', '') }

    get activated() { return this.hasAttribute('activated') }
    set activated(value) {
        if (value) {
            this.setAttribute('activated', '')
        }
        else {
            this.removeAttribute('activated')
        }
    }

    get outlined() { return this.hasAttribute('outlined') }
    set outlined(value) { this.setAttribute('outlined', '') }
}

customElements.define('wk-chip', WKChip)