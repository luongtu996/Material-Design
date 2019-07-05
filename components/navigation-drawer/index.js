window.addEventListener("load", event => {
    document.querySelectorAll(".navigation-drawer").forEach(element => {
        // let mediaLarge = window.matchMedia("(min-width: 840px)")
        // let mediaMedium = window.matchMedia("(min-width: 480px) and (max-width: 840px)")
        let mediaSmall = window.matchMedia("(max-width: 480px)")
    
        // console.log(
        //     mediaLarge.matches,
        //     mediaMedium.matches,
        //     mediaSmall.matches,
        // )

        let listItems = element.querySelectorAll(".list__item")

        window.addEventListener("resize", media)
        // window.addEventListener("load", media)
        media()

        function media () {
            if (mediaSmall.matches) {
                element.style.removeProperty("z-index")
                element.classList.add("navigation-drawer--modal")
                element.classList.add("navigation-drawer--closed")
            } else {
                element.style.setProperty("z-index", 3)
                element.classList.remove("navigation-drawer--modal")
                element.classList.remove("navigation-drawer--closed")
            }
        }

        listItems.forEach(listItem => {

            listItem.addEventListener("click", click)

            function click(event) {

                let navigationDrawerModal = element.classList.contains("navigation-drawer--modal")

                listItems.forEach(listItem => listItem.removeAttribute("activated"))

                listItem.setAttribute("activated", "")

                if (navigationDrawerModal) {
                    element.classList.add("navigation-drawer--closed")
                }
            }
        })
    })

})