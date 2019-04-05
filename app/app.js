class Model {
    data = [];
}

// class View {}
let View = (model) => `
    <div>${model.data.length}</div>
`;

class Controller {
    constructor(element) {
        this.element = element;
        this.model = new Model();

        let self = this;
        this.modelView = new Proxy(this.model, {
            set(target, property, value) {
                target[property] = value;
                self.renderView();
                return true;
            }
        });

        // this.modelView = {
        //     data: [
        //         { id: 1, text: 'name' }
        //     ]
        // }

        // console.log(this.modelView.data);
        this.modelView.data.push({ id: 2, text: 'name 2' });
        this.modelView.data.push({ id: 2, text: 'name 2' });
        this.modelView.data.push({ id: 2, text: 'name 2' });
        this.modelView.data.push({ id: 2, text: 'name 2' });

        this.model.data.push({ id: 2, text: 'name 2' });
        this.model.data.push({ id: 2, text: 'name 2' });
        this.model.data.push({ id: 2, text: 'name 2' });
        this.model.data.push({ id: 2, text: 'name 2' });

        // console.log(this.model);
        // console.log(this.modelView);
        this.renderView();
    }

    renderView() {
        this.element.innerHTML = View(this.model);
    }
}

new Controller(document.querySelector('.test'))