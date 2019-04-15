class WKDataTable extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <div class="data-table__header">
                <div class="data-table__section data-table__section--start">
                    ${this.title ? `<div class="data-table__title">${this.title}</div>`: ``}
                </div>
                <div class="data-table__section data-table__section--end">
                    <div class="data-table__icon icon">&#xE71C;</div>
                    <div class="data-table__icon icon">&#xE712;</div>
                </div>
            </div>
            <div class="data-table__content">
                <table class="data-table__table">
                    <thead class="data-table__thead">
                        <tr class="data-table__tr">
                            ${this.columns.map(column => `<th class="data-table__th">${column.text}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody class="data-table__tbody">
                        ${this.data.map(item => `
                            <tr class="data-table__tr">
                                ${this.columns.map(column => `<td class="data-table__td">${item[column.field]}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <div class="data-table__footer">
                <div class="data-table__icon icon">&#xE973;</div>
                <div class="data-table__icon icon">&#xE974;</div>
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
            'columns',
            'data',
            'title',
        ]
    }

    get columns() {
        return JSON.parse(this.getAttribute('columns'))
    }
    set columns(value) {
        this.setAttribute('columns', value)
    }

    get data() {
        return JSON.parse(this.getAttribute('data'))
    }
    set data(value) {
        this.setAttribute('data', value)
    }

    get title() {
        return this.getAttribute('title')
    }
    set title(value) {
        this.setAttribute('title', value)
    }
}

customElements.define('wk-data-table', WKDataTable)