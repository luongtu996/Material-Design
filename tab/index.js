document.querySelectorAll(".tab-bar").forEach(element => {
    let tabs = element.querySelectorAll(".tab")

    tabs.forEach(tab => {

        if (tab.hasAttribute("activated")) {
            element.style.setProperty("--tab-bar-indicator-left", `${tab.offsetLeft}px`)
            element.style.setProperty("--tab-bar-indicator-width", `${tab.clientWidth}px`)

            element.scrollLeft = (tab.offsetLeft + tab.clientWidth) - element.clientWidth + tab.clientWidth
        }

        tab.addEventListener("click", click)

        function click() {
            tabs.forEach(tab => tab.removeAttribute("activated"))
            tab.setAttribute("activated", "")

            element.style.setProperty("--tab-bar-indicator-left", `${tab.offsetLeft}px`)
            element.style.setProperty("--tab-bar-indicator-width", `${tab.clientWidth}px`)

            element.scrollLeft = (tab.offsetLeft + tab.clientWidth) - element.clientWidth + tab.clientWidth
        }
    })
})