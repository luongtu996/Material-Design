let attrs = new Set()

document.querySelectorAll("wk-checkbox").forEach(element => {
    Array.from(element.attributes).forEach(attr => {
        attrs.add(attr.name)
    })
})

console.log(attrs)