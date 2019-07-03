class ContactsComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Contacts Component</h1>
            <wk-router></wk-router>
        `
    }
}
customElements.define("contacts-component", ContactsComponent)

export default `<contacts-component></contacts-component>`