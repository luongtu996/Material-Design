export default class MDRipple {

    // _size = '';
    // _delegate = '';
    // _trigger = '';

    constructor(host) {
        this.delegate = this.delegate ? this.delegate : host;
        
        this.trigger = this.trigger ? this.trigger : host;

        this.beforeRender();
    
        this.trigger.addEventListener('mousedown', event => this.handleMousedown(event));
    }

    set size(value) {this._size = value;}

    get size() {return this._size}

    set delegate(value) {this._delegate = value;}

    get delegate() {return this._delegate}

    set trigger(value) {this._trigger = value;}
    
    get trigger() {return this._trigger}

    beforeRender() {
        this.trigger.setAttribute('tabIndex', 0);
    }

    render(event = { pageX: 0, pageY: 0 }) {
        let domRect = this.delegate.getBoundingClientRect();

        domRect.width = this.delegate.clientWidth;
        domRect.height = this.delegate.clientHeight;

        let size = this.size ? this.size : Math.sqrt(
            Math.pow(domRect.width, 2) +
            Math.pow(domRect.height, 2)
        );
        let left = (event.pageX - (window.scrollX + domRect.left)) / domRect.width;
        let top = (event.pageY - (window.scrollY + domRect.top)) / domRect.height;
        let translateX = (0.5 - left) * (domRect.width / size);
        let translateY = (0.5 - top) * (domRect.width / size * (domRect.height / domRect.width));

        this.delegate.style.setProperty('--ripple-size', `${size}px`);
        this.delegate.style.setProperty('--ripple-left', `${left * 100}%`);
        this.delegate.style.setProperty('--ripple-top', `${top * 100}%`);
        this.delegate.style.setProperty('--ripple-translateX', `${translateX * 100}%`);
        this.delegate.style.setProperty('--ripple-translateY', `${translateY * 100}%`);
    }

    handleMousedown(event) {
        this.render(event);
        
        this.delegate.style.setProperty('--ripple-animation', `none`);

        void this.delegate.offsetWidth;
        this.delegate.style.removeProperty('--ripple-animation');
    }
};