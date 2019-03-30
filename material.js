let cls = [];
document.querySelectorAll('[class]').forEach(el => el.getAttribute('class').split(' ').map(c => cls.push(c)));
cls = cls.filter((v, i, a) => a.indexOf(v) === i);
// cls = cls.sort((a, b) => a.localeCompare(b))
document.querySelector('body').insertAdjacentHTML('beforeend', 
`
<style>
.demo-table th {
    height: 48px;
    padding: 0 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}
.demo-table td {
    height: 48px;
    padding: 0 16px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.demo-table th:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.demo-table td:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.demo-code {
}
</style>
<br>
<br>
<table class="demo-table">
    <thead>
        <tr>
            <th>CSS Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        ${cls.map(c =>
    `<tr>
            <td><code class="demo-code">.${c}</code></td>
            <td></td>
        </tr>`).join('')}
    </tbody>
</table>`);

// checkbox
document.querySelectorAll('.checkbox').forEach(el => {
    let inputEl = el.querySelector('.checkbox__input');

    if (inputEl.hasAttribute('indeterminate')) {
        inputEl.indeterminate = inputEl.hasAttribute('indeterminate');
    }
})

let att = [];
document.querySelectorAll(`
    md-fab,
    md-button,
    md-checkbox,
    md-radio,
    md-switch,
    md-chip
`).forEach(el => {
    for (var i = el.attributes.length - 1; i >= 0; i--) {
        att.push(el.attributes[i].name);
    }
});
att = att.filter((v, i, a) => a.indexOf(v) === i);
// att = att.sort((a, b) => a.localeCompare(b))
document.querySelector('body').insertAdjacentHTML('beforeend',
    `
<style>
.demo-table th {
    height: 48px;
    padding: 0 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}
.demo-table td {
    height: 48px;
    padding: 0 16px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.demo-table th:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.demo-table td:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.demo-code {
}
</style>
<br>
<br>
<table class="demo-table">
    <thead>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        ${att.map(c =>
        `<tr>
            <td><code class="demo-code">${c}</code></td>
            <td></td>
            <td></td>
        </tr>`).join('')}
    </tbody>
</table>`);