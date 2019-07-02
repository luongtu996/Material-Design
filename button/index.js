document.querySelectorAll(".button").forEach(element => {
    element.addEventListener("click", click)

    function click(event) {
        if (element.classList.contains("button--toggle")) {

            let buttonGroup = element.parentNode
            let multiple = buttonGroup.hasAttribute("multiple")

            // choice
            if (!multiple) {
                Array.from(buttonGroup.children).forEach(element => element.removeAttribute("activated"))
            }

            // filter
            if (element.hasAttribute("activated")) {
                element.removeAttribute("activated")
            } else {
                element.setAttribute("activated", "")
            }
        }
    }
})