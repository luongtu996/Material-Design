class WKSlider extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <input type="range" 
            ${this.min ? `min="${this.min}"`: ``} 
            ${this.max ? `max="${this.max}"`: ``} 
            ${this.value ? `value="${this.value}"`: ``} class="slider__input">
        `
    }

    connectedCallback() {
        this.sliderInput = this.querySelector('.slider__input')
        this._input = this._input.bind(this)
        this._input()

        this.sliderInput.addEventListener('input', this._input)
    }

    _input(event) {
        this.style.setProperty('--slider-input-value', `${this.sliderInput.value}%`)

        this.dispatchEvent(new CustomEvent('onInput', {
            bubbles: false,
            detail: {
                value: this.sliderInput.value
            }
        }))
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { 
        this.template()
    }

    static get observedAttributes() {
        return [
            'min',
            'max',
            'value',
        ]
    }

    get min() {
        return this.getAttribute('min')
    }

    set min(value) {
        this.setAttribute('min', value)
    }

    get max() {
        return this.getAttribute('max')
    }

    set max(value) {
        this.setAttribute('max', value)
    }

    get value() {
        return this.getAttribute('value')
    }

    set value(value) {
        this.setAttribute('value', value)
    }
}

customElements.define('wk-slider', WKSlider)