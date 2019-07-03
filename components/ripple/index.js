export default class Ripple {

    constructor(element, options = {}) {
        this.options = options
        this.trigger = element
        this.delegate = this.options.delegate || element

        this.trigger.setAttribute("tabindex", 0)

        this.trigger.addEventListener("pointerdown", this.pointerdown.bind(this))
        this.delegate.addEventListener("animationend", this.animationend.bind(this))
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

    animationend(event) {
        let delegate = this.delegate

        delegate.style.removeProperty("--ripple-circumference")
        delegate.style.removeProperty("--ripple-left")
        delegate.style.removeProperty("--ripple-top")
        delegate.style.removeProperty("--ripple-translateX")
        delegate.style.removeProperty("--ripple-translateY")
    }
}

window.addEventListener("load", event => {
    document.querySelectorAll(".ripple").forEach(element => new Ripple(element))
    document.querySelectorAll(".button").forEach(element => new Ripple(element))
    document.querySelectorAll(".fab").forEach(element => new Ripple(element))
    document.querySelectorAll(".chip").forEach(element => new Ripple(element))
    document.querySelectorAll(".tab").forEach(element => new Ripple(element))
    document.querySelectorAll(".bottom-navigation").forEach(element => new Ripple(element))
    document.querySelectorAll(".list--with-action .list__item").forEach(element => new Ripple(element))
    document.querySelectorAll(".text-field").forEach(element => new Ripple(element.querySelector(".text-field__input"), {
        delegate: element.querySelector(".text-field__surface")
    }))
    document.querySelectorAll(".picker__title-action").forEach(element => new Ripple(element, {
        circumference: 28
    }))
    document.querySelectorAll(".picker__action").forEach(element => new Ripple(element, {
        circumference: 28
    }))
    document.querySelectorAll(".picker__grid:not(.picker__grid--week) .picker__column").forEach(element => new Ripple(element))
    document.querySelectorAll(".text-field__icon--control").forEach(element => new Ripple(element, {
        circumference: 40
    }))
    document.querySelectorAll(".image-list__action").forEach(element => new Ripple(element, {
        circumference: 40
    }))
    document.querySelectorAll(".card__toolbar-action").forEach(element => new Ripple(element, {
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
    document.querySelectorAll(".bottom-app-bar__action").forEach(element => new Ripple(element, {
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

    document.querySelectorAll(".ripple--filter").forEach(element => {
        element.addEventListener("click", event => {
            if (element.hasAttribute("selected")) {
                element.removeAttribute("selected")
            } else {
                element.setAttribute("selected", "")
            }
        })
    })

    document.querySelectorAll(".ripple--choice").forEach(element => {
        element.addEventListener("click", event => {
            element.parentNode.querySelectorAll(".ripple--choice").forEach(element => element.removeAttribute("activated"))
            if (element.hasAttribute("activated")) {
                element.removeAttribute("activated")
            } else {
                element.setAttribute("activated", "")
            }
        })
    })
})