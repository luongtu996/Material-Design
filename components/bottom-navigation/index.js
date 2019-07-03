document.querySelectorAll(".bottom-navigation-bar").forEach(element => {
    let bottomNavigations = element.querySelectorAll(".bottom-navigation")

    bottomNavigations.forEach(bottomNavigation => {
        bottomNavigation.addEventListener("click", click)

        function click(event) {
            bottomNavigations.forEach(bottomNavigation => bottomNavigation.removeAttribute("activated"))
            bottomNavigation.setAttribute("activated", "")
        }
    })
})