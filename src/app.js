import './components/navigation.js';
import './components/main.js';
import './components/router.js';
import './components/demo.js';
import './components/routeDefine.js';

class AppComponent extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const template = document.createElement('template');

        template.innerHTML = /*html*/`

            <div class="app-body">
                <navigation-component></navigation-component>
                <router-component>
                    <route-define route="/demo" component="DemoComponent"></route-define>
                    <route-define route="/main" component="main-component"></route-define>
                </router-component>
            </div>
            
        `;

        const templateContent = template.content.cloneNode(true);

        shadow.appendChild(templateContent);
    };

}

customElements.define('app-component', AppComponent);