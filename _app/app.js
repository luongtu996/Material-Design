/***
 * Web Components is a suite of different technologies allowing you to create reusable custom 
 * elements — with their functionality encapsulated away from the rest of your code — and utilize 
 * them in your web apps.
 * @class
 * @extends {HTMLElement}
 */
class Component extends HTMLElement {

    /**
     * @constructor
     */
    constructor() {
        /** Always call super first in constructor */
        super()

        /** write element functionality in here */
    }

    /**
     * Invoked when the custom element is first connected to the document's DOM.
     */
    connectedCallback() { }

    /**
     * Invoked when the custom element is disconnected from the document's DOM.
     */
    disconnectedCallback() { }

    /**
     * Invoked when the custom element is moved to a new document.
     */
    adoptedCallback() { }

    /**
     * Invoked when one of the custom element's attributes is added, removed, or changed.
     * @param {*} name 
     * @param {*} oldValue 
     * @param {*} newValue 
     */
    attributeChangedCallback(name, oldValue, newValue) { }

    /**
     * {attributeChangedCallback} Which attributes
     * to notice change for is specified in a {static get observedAttributes} method
     * @returns {array}
     */
    static get observedAttributes() {
        return []
    }
}

/**
 * The most common example you'll see of this property being used is to get access to the
 * CustomElementRegistry.define() method to define and register a new custom element,
 */
customElements.define('md-component', Component)