/**
 * @class
 */
export default class Ripple {

    constructor(config = {
        element,
        delegate,
        trigger,
        size,
    }) {
        this.config = config

        this.delegate = this.config.delegate ? this.config.delegate : this.config.element

        this.trigger = this.config.trigger ? this.config.trigger : this.config.element

        this.trigger.setAttribute('tabIndex', 0)

        this.mousedown()

        this.trigger.addEventListener('mousedown', this.mousedown.bind(this))
    }

    mousedown(event = {
        pageX: 0,
        pageY: 0
    }) {
        let domRect = this.delegate.getBoundingClientRect()
        domRect.width = this.delegate.clientWidth
        domRect.height = this.delegate.clientHeight

        let size = this.config.size ? this.config.size : Math.sqrt(
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