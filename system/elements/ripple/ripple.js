/**
 * @class
 */
export default class Ripple {

    /**
     * 
     * @param {object} config 
     */
    constructor(config = {
        element,
        delegate,
        trigger,
        size,
    }) {
        // Set config
        this.config = config

        // Set delegate element
        this.delegate = this.config.delegate ? this.config.delegate : this.config.element

        // Set trigger element
        this.trigger = this.config.trigger ? this.config.trigger : this.config.element

        // Handle focus
        this.trigger.setAttribute('tabIndex', 0)

        // Listen for mousedown
        this.trigger.addEventListener('mousedown', this.mousedown.bind(this))

        // Initialize ripple
        this.mousedown()
    }

    /**
     * 
     * @param {object} event 
     */
    mousedown(event = {
        pageX: 0,
        pageY: 0
    }) {
        // Get element size and position
        let domRect = this.delegate.getBoundingClientRect()

        // Set default width and height
        domRect.width = this.delegate.clientWidth
        domRect.height = this.delegate.clientHeight

        // Resize width and height to circumference
        let size = this.config.size ? this.config.size : Math.sqrt(
            Math.pow(domRect.width, 2) +
            Math.pow(domRect.height, 2)
        )

        // Set starting point, based on mousedown
        let left = (event.pageX - (window.scrollX + domRect.left)) / domRect.width
        let top = (event.pageY - (window.scrollY + domRect.top)) / domRect.height
        
        // Set endding point, calculate with circumference
        let translateX = (0.5 - left) * (domRect.width / size)
        let translateY = (0.5 - top) * (domRect.width / size * (domRect.height / domRect.width))

        // Restart animation before update information
        this.delegate.style.setProperty('--ripple-animation', `none`)
        void this.delegate.offsetWidth
        this.delegate.style.removeProperty('--ripple-animation')

        // Set custom CSS variable
        this.delegate.style.setProperty('--ripple-size', `${size}px`)
        this.delegate.style.setProperty('--ripple-left', `${left * 100}%`)
        this.delegate.style.setProperty('--ripple-top', `${top * 100}%`)
        this.delegate.style.setProperty('--ripple-translateX', `${translateX * 100}%`)
        this.delegate.style.setProperty('--ripple-translateY', `${translateY * 100}%`)
    }
}