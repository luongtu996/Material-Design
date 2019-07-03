document.querySelectorAll(".chip").forEach(element => {
    
    element.addEventListener("click", click)

    function click() {
        let choice = element.classList.contains("chip--choice")
        let filter = element.classList.contains("chip--filter")

        if (choice) {
            Array.from(element.parentNode.children).forEach(element => element.removeAttribute("activated"))

            if (element.hasAttribute("activated")) {
                element.removeAttribute("activated")
            } else {
                element.setAttribute("activated", "")
            }
        }

        if (filter) {
            if (element.hasAttribute("selected")) {
                element.removeAttribute("selected")
            } else {
                element.setAttribute("selected", "")
            }
        }
    }
})