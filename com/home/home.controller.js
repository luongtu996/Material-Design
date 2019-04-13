import HomeModel from './home.model.js';
import HomeView from './home.view.js';

// extends WKComponent
class HomeComponent extends HTMLElement {
    constructor() {
        super()
        
        this.homeModel = new HomeModel()
        this.innerHTML = HomeView(this.homeModel)
    }
}

// Controller
customElements.define('home-component', HomeComponent)

export default new HomeComponent()