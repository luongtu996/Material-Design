import HomeModel from './home.model.js';
import HomeView from './home.view.js';

class HomeController extends HTMLElement {
    constructor() {
        super()
        this.homeModel = new HomeModel()
        console.log(this.homeModel)
        this.innerHTML = HomeView(this.homeModel)
    }
}

customElements.define('home-component', HomeController)

export default new HomeController()