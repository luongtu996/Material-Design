import './chip-group.js'
import Ripple from '../ripple/ripple.js';

class WKChip extends HTMLElement {

    constructor() {
        super()
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
            element: this,
            size: 200
        })

        this.addEventListener('click', this.click.bind(this))

        if (this.action) {
            this.querySelector('.chip__action').addEventListener('click', this.actionClick.bind(this))
        }
    }

    actionClick(event) {
        event.preventDefault()
        event.stopPropagation()

        this.dispatchEvent(new CustomEvent('onActionClick', {
            detail: this
        }))
    }

    click(event) {
        if (this.filter) {
            this.filterClick(event)
        }

        if (this.choice) {
            this.choiceClick(event)
        }
    }

    filterClick(event) {
        this.selected = !this.selected

        this.dispatchEvent(new CustomEvent('onFilterClick', {
            detail: this
        }))
    }

    choiceClick(event) {
        if (!this.parentNode.multiple) {
            Array.from(this.parentNode.children).forEach(element => {
                element.activated = false
            });
        }

        this.activated = !this.activated

        this.dispatchEvent(new CustomEvent('onChoiceClick', {
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
            // 'input',
            'choice',
            'filter',
            'activated',
            'selected',
            'outlined',
        ]
    }

    get thumb() {
        return this.getAttribute('thumb')
    }
    set thumb(value) {
        this.setAttribute('thumb', value)
    }

    get icon() {
        return this.getAttribute('icon')
    }
    set icon(value) {
        this.setAttribute('icon', value)
    }

    get text() {
        return this.getAttribute('text')
    }
    set text(value) {
        this.setAttribute('text', value)
    }

    get action() {
        return this.hasAttribute('action')
    }
    set action(value) {
        this.setAttribute('action', '')
    }

    get choice() {
        return this.hasAttribute('choice')
    }
    set choice(value) {
        this.setAttribute('choice', '')
    }

    get filter() {
        return this.hasAttribute('filter')
    }
    set filter(value) {
        this.setAttribute('filter', '')
    }

    get outlined() {
        return this.hasAttribute('outlined')
    }
    set outlined(value) {
        this.setAttribute('outlined', '')
    }

    get activated() {
        return this.hasAttribute('activated')
    }
    set activated(value) {
        if (value) {
            this.setAttribute('activated', '')
        }
        else {
            this.removeAttribute('activated')
        }
    }

    get selected() {
        return this.hasAttribute('selected')
    }
    set selected(value) {
        if (value) {
            this.setAttribute('selected', '')
        }
        else {
            this.removeAttribute('selected')
        }
    }
}

customElements.define('wk-chip', WKChip)