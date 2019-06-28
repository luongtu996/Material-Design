let classNames = new Set()
let includesClassName = window.location.pathname.split('/')[1]

document.querySelectorAll("[class]").forEach(element => {
    element.getAttribute("class").split(" ").forEach(className => {
        classNames.add(className)
    })
})

let objClassNames = Array.from(classNames).filter(className => className.includes(includesClassName)).map(className => {
    let name = className
    let block = className.match(new RegExp(`^(${includesClassName})$`))
    let element = className.match(new RegExp(`^${includesClassName}__((?!.*\\--).*)`))
    let elementModifier = className.match(new RegExp(`^${includesClassName}__.*--(.*)`))
    let modifier = className.match(new RegExp(`^${includesClassName}--(.*)`))
    let blockGroup = className.match(new RegExp(`^${includesClassName}-((?!.*\\--)[\\w|\\d].*)$`))
    let blockGroupModifier = className.match(new RegExp(`^${includesClassName}-[\\w|\\d].*--(.*)$`))

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
    if (elementModifier) {
        obj.type = "elementModifier"
        obj.value = elementModifier[1]
    }
    if (modifier) {
        obj.type = "modifier"
        obj.value = modifier[1]
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

let sortType = [
    "block",
    "element",
    "elementModifier",
    "modifier",
    "blockGroup",
    "blockGroupModifier",
]

objClassNames.sort((a, b) => sortType.indexOf(a.type) - sortType.indexOf(b.type)).forEach(obj => {
    let code = ""

    code += `/* \n\t@${obj.type} ${obj.value} \n*/`
    code += `\n.${obj.name} {}\n`

    if (
        obj.type === "modifier"
    ) {
        objClassNames.filter(cls => cls.type === "element" || cls.type === "elementModifier").forEach(cls => {
            code += `\n.${obj.name} .${cls.name} {}\n`
        })
    }

    if (
        obj.type === "blockGroup" ||
        obj.type === "blockGroupModifier"
    ) {
        objClassNames.filter(cls => cls.type === "block" || cls.type === "modifier").forEach(cls => {
            code += `\n.${obj.name} .${cls.name} {}\n`
        })
    }

    console.log(code)
})