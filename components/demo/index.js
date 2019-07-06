window.addEventListener("load", event => {
    let attrs = []
    let tag = "wk-top-app-bar"

    document.querySelectorAll(tag).forEach(element => {
        Array.from(element.attributes).forEach(attr => {
            if (!attrs.find(obj => obj.name === attr.name)) {
                attrs.push({
                    name: attr.name,
                    type: attr.value === "true" ? "boolean" : "string"
                })
            }
        })
    })

    console.log(`# ${tag}

## Props

Prop Name | Type | Description
--- | --- | ---
${attrs.map(attr => `${attr.name} | ${attr.type} | ...\n`).join("")}

## Events

Event Name | Params | Description
--- | --- | ---
... | ... | ...`)

})