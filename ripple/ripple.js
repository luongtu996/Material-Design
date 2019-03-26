document.querySelectorAll('.ripple').forEach(ripple => {

    ripple.setAttribute('tabIndex', 0);

    ripple.addEventListener('mousedown', event => handleMousedown(event));
    ripple.addEventListener('mouseup', event => handleMouseup(event));
    ripple.addEventListener('blur', event => handleBlur(event));

    function handleMousedown(event) {
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