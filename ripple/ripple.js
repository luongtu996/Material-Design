export default class MDRipple {

    constructor(ripple) {
        this.ripple = ripple;

        this.beforeRender();
        this.render();
    
        this.ripple.addEventListener('mousedown', event => this.handleMousedown(event));
        // this.ripple.addEventListener('mouseup', event => this.handleMouseup(event));
        // this.ripple.addEventListener('blur', event => this.handleBlur(event));
    }

    beforeRender() {
        this.ripple.setAttribute('tabIndex', 0);

        // this.ripple.classList.add('ripple');
    }

    render(event = { pageX: 0, pageY: 0 }) {
        let domRect = this.ripple.getBoundingClientRect();
        let size = Math.sqrt(
            Math.pow(domRect.width, 2) +
            Math.pow(domRect.height, 2)
        );
        let left = (event.pageX - (window.scrollX + domRect.left)) / domRect.width;
        let top = (event.pageY - (window.scrollY + domRect.top)) / domRect.height;
        let translateX = (0.5 - left) * (domRect.width / size);
        let translateY = (0.5 - top) * (domRect.width / size * (domRect.height / domRect.width));

        this.ripple.style.setProperty('--ripple-size', `${size}px`);
        this.ripple.style.setProperty('--ripple-left', `${left * 100}%`);
        this.ripple.style.setProperty('--ripple-top', `${top * 100}%`);
        this.ripple.style.setProperty('--ripple-translateX', `${translateX * 100}%`);
        this.ripple.style.setProperty('--ripple-translateY', `${translateY * 100}%`);
    }

    handleMousedown(event) {

        this.render(event);

        // this.ripple.classList.remove('is-focus');
        // this.ripple.classList.remove('is-pressed');
        
        this.ripple.style.setProperty('--ripple-animation', `none`);

        void this.ripple.offsetWidth;
        this.ripple.style.removeProperty('--ripple-animation');
        // this.ripple.classList.add('is-pressed');
    }

    // handleMouseup(event) {
    //     this.ripple.classList.add('is-focus');
    // }

    // handleBlur(event) {
    //     this.ripple.classList.remove('is-focus');
    //     this.ripple.classList.remove('is-pressed');
    // }
};