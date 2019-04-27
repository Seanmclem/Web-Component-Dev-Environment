import './routeLink.js';
class NavigationComponent extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const template = document.createElement('template');


        template.innerHTML = /*html*/`
            <div class="navigation">
                <h3>nav</h3>
                <ul>
                    <li>
                        <route-link path="demo">
                            demo
                        </route-link>
                    </li>
                    <li>
                        <route-link path="main">
                            main
                        </route-link>
                    </li>
                </ul>
            </div>
        `;

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    };

}

customElements.define('navigation-component', NavigationComponent);