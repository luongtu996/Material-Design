class WKCalendar extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <div class="calendar__header">
                <div class="calendar__section calendar__section--start">
                    <div class="calendar__title">${this.months[this.month]} ${this.year}</div>
                </div>
                <div class="calendar__section calendar__section--end">
                    <div class="calendar__icon icon">&#xE973;</div>
                    <div class="calendar__icon icon">&#xE974;</div>
                </div>
            </div>
            <div class="calendar__body">
                <div class="calendar__layout">
                    <div class="calendar__grid calendar__grid--header">
                        ${Array(7).fill(0).map((value, index) => `
                            <div class="calendar__column">${this.days[index]}</div>
                        `).join('')}
                    </div>
                    <div class="calendar__grid calendar__grid--body">
                        ${Array(42).fill('').map((value, index) => `
                            <div class="calendar__column">${(index >= this.firstDay && index <= (this.dayOfMonth + (this.firstDay - 1))) ? (index - (this.firstDay - 1)) : value}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { 
        this.template()
    }

    static get observedAttributes() {
        return [
            'value'
        ]
    }

    get value() {
        return this.getAttribute('value')
    }
    set value(value) {
        this.setAttribute('value', value)
    }

    get date() {
        return this._date ? this._date : this.value ? new Date(this.value) : new Date()
    }
    set date(value) {
        this._date = new Date(value)
    }


    get year() {
        return this.date.getFullYear()
    }
    // set year(value) {}


    get month() {
        return this.date.getMonth()
    }
    // set month(value) {}


    get day() {
        return this.date.getDay()
    }
    // set day(value) {}


    get months() {
        // ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
    // set months(value) {}


    get days() {
        // ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return ["S", "M", "T", "W", "T", "F", "S"]
    }
    // set days(value) {}

    get firstDay() {
        return (new Date(this.year, this.month)).getDay()
    }

    get dayOfMonth() {
        return 32 - new Date(this.year, this.month, 32).getDate()
    }
}

customElements.define('wk-calendar', WKCalendar)