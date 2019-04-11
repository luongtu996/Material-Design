class Router {
    constructor() {
        this.hashchange = this.hashchange.bind(this)

        window.addEventListener('DOMContentLoaded', this.hashchange)
        window.addEventListener('hashchange', this.hashchange)
    }
    
    isDirty = true
    reqURL = ''
    
    hashchange(event) {

        if (
            this.reqURL == event.oldURL
        ) {
            return
        }

        if (this.isDirty && event.newURL) {
            if (this.reqURL === '') {
                this.reqURL = event.newURL
            }

            let confirm = window.confirm('confirm what ?')

            if (confirm) {
                this.isDirty = false
                this.reqURL = ''
            } else {
                window.location.replace(event.oldURL)
            }
        }

        console.log(this, event)
    }
}

new Router();