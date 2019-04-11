import Model from './model.js'
import { style, template } from './view.js'

class Controller extends HTMLElement {

    set link(style) {
        let link = document.querySelector(`link[href="${style}"]`)

        if (!link) {
            link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = `${style}`
            document.querySelector('head').appendChild(link)
        }
    } 

    constructor() {
        super()

        this.link = style
        console.log(this.link)
    }
}

customElements.define('md-test', Controller)