class Ripple {

    constructor(element, options = {}) {
        this.options = options
        this.trigger = element
        this.delegate = this.options.delegate || element
        this.pointerdown = this.pointerdown.bind(this)

        // set default
        this.trigger.setAttribute("tabindex", 0)
        
        // add event
        this.trigger.addEventListener("pointerdown", this.pointerdown)
    }

    pointerdown(event) {
        let delegate = this.delegate

        delegate.style.setProperty("--ripple-animation", "none")
        // reflow
        let rect = delegate.getBoundingClientRect()
        delegate.style.removeProperty("--ripple-animation")

        rect.width = delegate.clientWidth
        rect.height = delegate.clientHeight
    
        // get actual circumference
        let circumference = this.options.circumference || Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2))
        let left = (event.clientX - rect.left) / rect.width
        let top = (event.clientY - rect.top) / rect.height
        let translateX = (0.5 - left) * (rect.width / circumference)
        let translateY = (0.5 - top) * (rect.width / circumference * (rect.height / rect.width))
    
        delegate.style.setProperty("--ripple-circumference", `${circumference / rect.width * 100}%`)
        delegate.style.setProperty("--ripple-left", `${left * 100}%`)
        delegate.style.setProperty("--ripple-top", `${top * 100}%`)
        delegate.style.setProperty("--ripple-translateX", `${translateX * 100}%`)
        delegate.style.setProperty("--ripple-translateY", `${translateY * 100}%`)
    }
}

// Register ripple here...
document.querySelectorAll(".button").forEach(element => new Ripple(element))
document.querySelectorAll(".fab").forEach(element => new Ripple(element))
document.querySelectorAll(".chip").forEach(element => new Ripple(element))
document.querySelectorAll(".bottom-navigation").forEach(element => new Ripple(element))
document.querySelectorAll(".tab").forEach(element => new Ripple(element))
document.querySelectorAll(".list--with-action .list__item").forEach(element => new Ripple(element))
document.querySelectorAll(".top-app-bar__action").forEach(element => new Ripple(element, {
    circumference: 40
}))
document.querySelectorAll(".checkbox").forEach(element => new Ripple(element.querySelector(".checkbox__input"), {
    delegate: element.querySelector(".checkbox__track"),
    circumference: 40
}))
document.querySelectorAll(".radio").forEach(element => new Ripple(element.querySelector(".radio__input"), {
    delegate: element.querySelector(".radio__track"),
    circumference: 40
}))
document.querySelectorAll(".switch").forEach(element => new Ripple(element.querySelector(".switch__input"), {
    delegate: element.querySelector(".switch__thumb"),
    circumference: 40
}))