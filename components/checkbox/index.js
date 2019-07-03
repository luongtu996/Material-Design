document.querySelectorAll(".checkbox").forEach(element => {
    let checkboxInput = element.querySelector(".checkbox__input")

    if (checkboxInput.hasAttribute("indeterminate")) {
        checkboxInput.indeterminate = true
    }
})