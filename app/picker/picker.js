class PickerComponent extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div class="layout">
                <div class="layout__grid">
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <div class="picker">
                            <div class="picker__header">
                                <div class="picker__section picker__section--start">
                                    <div class="picker__title">
                                        <div class="picker__title-text">July 2019</div>
                                        <div class="picker__title-action">&#xEDDC;</div>
                                    </div>
                                </div>
                                <div class="picker__section picker__section--end">
                                    <div class="picker__action">&#xE96F;</div>
                                    <div class="picker__action">&#xE970;</div>
                                </div>
                            </div>
                            <div class="picker__body">
                                <div class="picker__grid picker__grid--week">
                                    <div class="picker__column">Su</div>
                                    <div class="picker__column">Mo</div>
                                    <div class="picker__column">Tu</div>
                                    <div class="picker__column">We</div>
                                    <div class="picker__column">Th</div>
                                    <div class="picker__column">Fr</div>
                                    <div class="picker__column">Sa</div>
                                </div>
                                <div class="picker__grid picker__grid--day">
                                    <div class="picker__column"></div>
                                    <div class="picker__column">1</div>
                                    <div class="picker__column picker__column--current">2</div>
                                    <div class="picker__column">3</div>
                                    <div class="picker__column">4</div>
                                    <div class="picker__column">5</div>
                                    <div class="picker__column">6</div>
                                    <div class="picker__column" activated>7</div>
                                    <div class="picker__column">8</div>
                                    <div class="picker__column">9</div>
                                    <div class="picker__column">10</div>
                                    <div class="picker__column">11</div>
                                    <div class="picker__column">12</div>
                                    <div class="picker__column">13</div>
                                    <div class="picker__column">14</div>
                                    <div class="picker__column">15</div>
                                    <div class="picker__column">16</div>
                                    <div class="picker__column">17</div>
                                    <div class="picker__column">18</div>
                                    <div class="picker__column">19</div>
                                    <div class="picker__column">20</div>
                                    <div class="picker__column">21</div>
                                    <div class="picker__column">22</div>
                                    <div class="picker__column">23</div>
                                    <div class="picker__column">24</div>
                                    <div class="picker__column">25</div>
                                    <div class="picker__column">26</div>
                                    <div class="picker__column">27</div>
                                    <div class="picker__column">28</div>
                                    <div class="picker__column">29</div>
                                    <div class="picker__column">30</div>
                                    <div class="picker__column">31</div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <div class="picker">
                            <div class="picker__header">
                                <div class="picker__section picker__section--start">
                                    <div class="picker__title">
                                        <div class="picker__title-text">July 2019</div>
                                        <div class="picker__title-action">&#xEDDC;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="picker__body">
                                <div class="picker__grid picker__grid--year">
                                    <div class="picker__column">2001</div>
                                    <div class="picker__column">2002</div>
                                    <div class="picker__column">2003</div>
                                    <div class="picker__column">2004</div>
                                    <div class="picker__column">2005</div>
                                    <div class="picker__column">2006</div>
                                    <div class="picker__column">2007</div>
                                    <div class="picker__column">2008</div>
                                    <div class="picker__column">2009</div>
                                    <div class="picker__column">2010</div>
                                    <div class="picker__column">2011</div>
                                    <div class="picker__column">2012</div>
                                    <div class="picker__column">2013</div>
                                    <div class="picker__column">2014</div>
                                    <div class="picker__column">2015</div>
                                    <div class="picker__column">2016</div>
                                    <div class="picker__column">2017</div>
                                    <div class="picker__column">2018</div>
                                    <div class="picker__column picker__column--current">2019</div>
                                    <div class="picker__column">2020</div>
                                    <div class="picker__column">2021</div>
                                    <div class="picker__column">2022</div>
                                    <div class="picker__column">2023</div>
                                    <div class="picker__column" activated>2024</div>
                                    <div class="picker__column">2025</div>
                                    <div class="picker__column">2026</div>
                                    <div class="picker__column">2027</div>
                                    <div class="picker__column">2028</div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <div class="picker">
                            <div class="picker__header">
                                <div class="picker__section picker__section--start">
                                    <div class="picker__title">
                                        <div class="picker__title-text">July 2019</div>
                                        <div class="picker__title-action">&#xEDDC;</div>
                                    </div>
                                </div>
                                <div class="picker__section picker__section--end">
                                    <div class="picker__action">&#xE96F;</div>
                                    <div class="picker__action">&#xE970;</div>
                                </div>
                            </div>
                            <div class="picker__body">
                                <div class="picker__grid picker__grid--week">
                                    <div class="picker__column">Su</div>
                                    <div class="picker__column">Mo</div>
                                    <div class="picker__column">Tu</div>
                                    <div class="picker__column">We</div>
                                    <div class="picker__column">Th</div>
                                    <div class="picker__column">Fr</div>
                                    <div class="picker__column">Sa</div>
                                </div>
                                <div class="picker__grid picker__grid--day">
                                    <div class="picker__column"></div>
                                    <div class="picker__column">1</div>
                                    <div class="picker__column picker__column--current" activated>2</div>
                                    <div class="picker__column">3</div>
                                    <div class="picker__column">4</div>
                                    <div class="picker__column">5</div>
                                    <div class="picker__column">6</div>
                                    <div class="picker__column">7</div>
                                    <div class="picker__column">8</div>
                                    <div class="picker__column">9</div>
                                    <div class="picker__column">10</div>
                                    <div class="picker__column">11</div>
                                    <div class="picker__column">12</div>
                                    <div class="picker__column">13</div>
                                    <div class="picker__column">14</div>
                                    <div class="picker__column">15</div>
                                    <div class="picker__column">16</div>
                                    <div class="picker__column">17</div>
                                    <div class="picker__column">18</div>
                                    <div class="picker__column">19</div>
                                    <div class="picker__column">20</div>
                                    <div class="picker__column">21</div>
                                    <div class="picker__column">22</div>
                                    <div class="picker__column">23</div>
                                    <div class="picker__column">24</div>
                                    <div class="picker__column">25</div>
                                    <div class="picker__column">26</div>
                                    <div class="picker__column">27</div>
                                    <div class="picker__column">28</div>
                                    <div class="picker__column">29</div>
                                    <div class="picker__column">30</div>
                                    <div class="picker__column">31</div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                    <div class="picker__column"></div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div class="layout__column layout__column--3-large layout__column--8-medium layout__column--4-small">
            
                        <div class="picker">
                            <div class="picker__header">
                                <div class="picker__section picker__section--start">
                                    <div class="picker__title">
                                        <div class="picker__title-text">July 2019</div>
                                        <div class="picker__title-action">&#xEDDC;</div>
                                    </div>
                                </div>
                            </div>
                            <div class="picker__body">
                                <div class="picker__grid picker__grid--year">
                                    <div class="picker__column">2001</div>
                                    <div class="picker__column">2002</div>
                                    <div class="picker__column">2003</div>
                                    <div class="picker__column">2004</div>
                                    <div class="picker__column">2005</div>
                                    <div class="picker__column">2006</div>
                                    <div class="picker__column">2007</div>
                                    <div class="picker__column">2008</div>
                                    <div class="picker__column">2009</div>
                                    <div class="picker__column">2010</div>
                                    <div class="picker__column">2011</div>
                                    <div class="picker__column">2012</div>
                                    <div class="picker__column">2013</div>
                                    <div class="picker__column">2014</div>
                                    <div class="picker__column">2015</div>
                                    <div class="picker__column">2016</div>
                                    <div class="picker__column">2017</div>
                                    <div class="picker__column">2018</div>
                                    <div class="picker__column picker__column--current" activated>2019</div>
                                    <div class="picker__column">2020</div>
                                    <div class="picker__column">2021</div>
                                    <div class="picker__column">2022</div>
                                    <div class="picker__column">2023</div>
                                    <div class="picker__column">2024</div>
                                    <div class="picker__column">2025</div>
                                    <div class="picker__column">2026</div>
                                    <div class="picker__column">2027</div>
                                    <div class="picker__column">2028</div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("picker-component", PickerComponent)

export default `<picker-component></picker-component>`