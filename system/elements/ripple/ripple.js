/**
 * @class
 */
export default class Ripple {

    constructor(element) {
        // selector
        this.element = element
        
        // delegate child element
        this.delegate = element
        
        if (this.wkRippleDelegate) {
            this.delegate = this.element.querySelector(this.wkRippleDelegate)
        }
        
        // trigger child element
        this.trigger = element

        if (this.wkRippleTrigger) {
            this.trigger = this.element.querySelector(this.wkRippleTrigger)
        }

        // custom diameter size
        if (this.wkRippleSize) {
            this.size = this.wkRippleSize
        }

        // set attribute style
        this.delegate.setAttribute('wkRippleState', '')

        // set tabIndex handle focus
        this.trigger.setAttribute('tabIndex', 0)

        // first time render
        this.mousedown({
            pageX: 0,
            pageY: 0
        })

        // render on mousedown
        this.trigger.addEventListener('mousedown', this.mousedown.bind(this))
    }

    get wkRippleDelegate() {
        return this.element.getAttribute('wkRippleDelegate')
    }

    get wkRippleTrigger() {
        return this.element.getAttribute('wkRippleTrigger')
    }

    get wkRippleSize() {
        return this.element.getAttribute('wkRippleSize')
    }

    mousedown(event) {
        let domRect = this.delegate.getBoundingClientRect()
        domRect.width = this.delegate.clientWidth
        domRect.height = this.delegate.clientHeight

        let size = this.size ? this.size : Math.sqrt(
            Math.pow(domRect.width, 2) +
            Math.pow(domRect.height, 2)
        )
        let left = (event.pageX - (window.scrollX + domRect.left)) / domRect.width
        let top = (event.pageY - (window.scrollY + domRect.top)) / domRect.height
        let translateX = (0.5 - left) * (domRect.width / size)
        let translateY = (0.5 - top) * (domRect.width / size * (domRect.height / domRect.width))

        this.delegate.style.setProperty('--ripple-animation', `none`)
        void this.delegate.offsetWidth
        this.delegate.style.removeProperty('--ripple-animation')

        this.delegate.style.setProperty('--ripple-size', `${size}px`)
        this.delegate.style.setProperty('--ripple-left', `${left * 100}%`)
        this.delegate.style.setProperty('--ripple-top', `${top * 100}%`)
        this.delegate.style.setProperty('--ripple-translateX', `${translateX * 100}%`)
        this.delegate.style.setProperty('--ripple-translateY', `${translateY * 100}%`)
    }
}

document.querySelectorAll('[wkRipple]').forEach(el => new Ripple(el))