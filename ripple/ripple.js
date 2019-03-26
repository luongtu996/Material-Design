document.querySelectorAll('.ripple').forEach(ripple => {

    ripple.setAttribute('tabIndex', 0);

    render();

    ripple.addEventListener('mousedown', event => handleMousedown(event));
    ripple.addEventListener('mouseup', event => handleMouseup(event));
    ripple.addEventListener('blur', event => handleBlur(event));

    function render(event = {
        pageX: 0,
        pageY: 0
    }) {
        let domRect = ripple.getBoundingClientRect();
        let size = Math.sqrt(
            Math.pow(domRect.width, 2) +
            Math.pow(domRect.height, 2)
        );
        let left = (event.pageX - domRect.left) / domRect.width;
        let top = (event.pageY - domRect.top) / domRect.height;
        let translateX = (0.5 - left) * (domRect.width / size);
        let translateY = (0.5 - top) * (domRect.width / size * (domRect.height / domRect.width));

        ripple.style.setProperty('--ripple-size', `${size}px`);
        ripple.style.setProperty('--ripple-left', `${left * 100}%`);
        ripple.style.setProperty('--ripple-top', `${top * 100}%`);
        ripple.style.setProperty('--ripple-translateX', `${translateX * 100}%`);
        ripple.style.setProperty('--ripple-translateY', `${translateY * 100}%`);
    }

    function handleMousedown(event) {

        render(event);

        ripple.classList.remove('is-focus');
        ripple.classList.remove('is-pressed');
        
        void ripple.offsetWidth;
        ripple.classList.add('is-pressed');
    }

    function handleMouseup(event) {
        ripple.classList.add('is-focus');
    }

    function handleBlur(event) {
        ripple.classList.remove('is-focus');
        ripple.classList.remove('is-pressed');
    }
});