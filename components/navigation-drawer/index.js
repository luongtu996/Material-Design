window.addEventListener("load", event => {
    document.querySelectorAll(".navigation-drawer").forEach(element => {
        let listItems = element.querySelectorAll(".list__item")

        listItems.forEach(listItem => {

            listItem.addEventListener("click", click)

            function click(event) {

                listItems.forEach(listItem => listItem.removeAttribute("activated"))

                listItem.setAttribute("activated", "")
            }
        })
    })
})