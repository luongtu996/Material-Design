// CSS Naming class
let classNames = new Set()
// let currentClassName = window.location.pathname.split("/")[1]
let currentClassName = "card"

document.querySelectorAll("[class]").forEach(element => {
    element.getAttribute("class").split(" ").forEach(className => {
        classNames.add(className)
    })
})

let ObjClassNames = Array.from(classNames).filter(className => className.includes(currentClassName)).map(className => {
    let name = className // name
    let block = className.match(new RegExp(`^(${currentClassName})$`)) // block
    let element = className.match(new RegExp(`^${currentClassName}__((?!.*\\--).*)$`)) // element
    let modifier = className.match(new RegExp(`^${currentClassName}--(.*)$`)) // modifier
    let elementModifier = className.match(new RegExp(`^${currentClassName}__.*--(.*)$`)) // elementModifier
    let blockGroup = className.match(new RegExp(`^${currentClassName}-((?!.*\\--)[\\w|\\d].*)$`)) // blockGroup
    let blockGroupModifier = className.match(new RegExp(`^${currentClassName}-[\\w|\\d].*--(.*)$`)) // blockGroupModifier

    let obj = {
        name
    }

    if (block) {
        obj.type = "block"
        obj.value = block[1]
    }
    if (element) {
        obj.type = "element"
        obj.value = element[1]
    }
    if (modifier) {
        obj.type = "modifier"
        obj.value = modifier[1]
    }
    if (elementModifier) {
        obj.type = "elementModifier"
        obj.value = elementModifier[1]
    }
    if (blockGroup) {
        obj.type = "blockGroup"
        obj.value = blockGroup[1]
    }
    if (blockGroupModifier) {
        obj.type = "blockGroupModifier"
        obj.value = blockGroupModifier[1]
    }

    return obj
})

let sortMap = [
    "block",
    "element",
    "elementModifier",
    "modifier",
    "blockGroup",
    "blockGroupModifier",
]

ObjClassNames.sort((a, b) => sortMap.indexOf(a.type) - sortMap.indexOf(b.type)).forEach(obj => {
    let code = ``

    code += `/* \n\t@${obj.type} ${obj.value} \n*/\n`
    code += `.${obj.name} {}\n`

    if (
        obj.type === "modifier"
    ) {
        ObjClassNames.filter(css => css.type === "element" || css.type === "elementModifier").forEach(css => {
            code += `\n.${obj.name} .${css.name} {}\n`
        })
    }

    if (
        obj.type === "blockGroup" ||
        obj.type === "blockGroupModifier"
    ) {
        ObjClassNames.filter(css => css.type === "block" || css.type === "modifier").forEach(css => {
            code += `\n.${obj.name} .${css.name} {}\n`
        })
    }

    console.log(code)
})