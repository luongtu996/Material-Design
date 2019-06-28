class Ripple {

    constructor(element, options = {}) {
        this.options = Object.assign({}, {}, options)
        this.trigger = element
        this.delegate = this.options.delegate || element

        this.trigger.setAttribute("tabindex", 0)
        
        this.trigger.addEventListener("pointerdown", this.pointerdown.bind(this))
    }

    pointerdown(event) {
        let delegate = this.delegate

        delegate.style.setProperty("--ripple-animation", "none")
        let rect = delegate.getBoundingClientRect()
        delegate.style.removeProperty("--ripple-animation")
    
        let circumference = this.options.circumference || Math.sqrt(Math.pow(delegate.clientWidth, 2) + Math.pow(delegate.clientHeight, 2))
        let left = (event.clientX - rect.left) / delegate.clientWidth
        let top = (event.clientY - rect.top) / delegate.clientHeight
        let translateX = (0.5 - left) * (delegate.clientWidth / circumference)
        let translateY = (0.5 - top) * (delegate.clientWidth / circumference * (delegate.clientHeight / delegate.clientWidth))
    
        delegate.style.setProperty("--ripple-circumference", `${circumference / delegate.clientWidth * 100}%`)
        delegate.style.setProperty("--ripple-left", `${left * 100}%`)
        delegate.style.setProperty("--ripple-top", `${top * 100}%`)
        delegate.style.setProperty("--ripple-translateX", `${translateX * 100}%`)
        delegate.style.setProperty("--ripple-translateY", `${translateY * 100}%`)
    }
}

document.querySelectorAll(".button").forEach(element => new Ripple(element))
document.querySelectorAll(".fab").forEach(element => new Ripple(element))
document.querySelectorAll(".chip").forEach(element => new Ripple(element))
document.querySelectorAll(".bottom-navigation").forEach(element => new Ripple(element))
document.querySelectorAll(".tab").forEach(element => new Ripple(element))
document.querySelectorAll(".list--with-action .list__item").forEach(element => new Ripple(element))
document.querySelectorAll(".text-field__icon").forEach(element => new Ripple(element, {
    circumference: 40
}))
document.querySelectorAll(".top-app-bar__action").forEach(element => new Ripple(element, {
    circumference: 40
}))
document.querySelectorAll(".side-sheet__action").forEach(element => new Ripple(element, {
    circumference: 40
}))
document.querySelectorAll(".bottom-sheet__action").forEach(element => new Ripple(element, {
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
document.querySelectorAll(".text-field").forEach(element => new Ripple(element.querySelector(".text-field__input"), {
    delegate: element.querySelector(".text-field__container")
}))