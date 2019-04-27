export class RouterComponent extends HTMLElement {
    //Component is a router-outlet, a route registry, and route handler
    routes = {};
    isFirstRoute = true;

    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        let template = document.createElement('template');

        this.setupRoutes();
        window.addEventListener('popstate', e => this.onBack(e));
        document.querySelector('html').addEventListener('routed', e => {
            const path = e.detail.path;
            this.shadowRoot.innerHTML = this.render(path);
        });

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    }; //end constructor


    render(path) {
        const componentName = this.routes[`'${path}'`] ? this.routes[`'${path}'`] : this.routes[`'/${path}'`];
        return /*html*/`
            <div class="router">
                ${componentName ? `<${componentName}></${componentName}>` : ``}
            </div>
        `;
    }

    setupRoutes = () => {
        Array.from(this.children)
        .forEach(childElement => {
            if(childElement.nodeName === "ROUTE-DEFINE"){
                const route = childElement.getAttribute("route");
                const component = this.handleNameStyle(childElement.getAttribute("component"));
                this.routes[`'${route}'`] = component;
            }
        });
        //console.log(this.routes);
        this.checkFirstRoute();
    }

    handleNameStyle(componentName) {
        if(componentName && componentName.indexOf('-') === -1){
            var i=0;
            var character='';
            while (i <= componentName.length){
                character = componentName.charAt(i);
                if (isNaN(character * 1) && character == character.toUpperCase()){
                    //alert ('upper case true');
                    const newChars = i == 0 ? character.toLowerCase() : `-${character.toLowerCase()}`
                    componentName = componentName.substr(0, i) + newChars + componentName.substr(i + 1);
                } 
                i++;
            }
        } 
        return componentName;
    }



    checkFirstRoute = () => {
        if(this.checkFirstRoute){
            //console.log('first route!')
            this.checkFirstRoute = false;
            const currentRoute = window.location.pathname;
            this.shadowRoot.innerHTML = this.render(currentRoute);
        }
    }

    onBack(e){
        const currentRoute = window.location.pathname;
        this.shadowRoot.innerHTML = this.render(currentRoute);
    }

    // toTitleCase(str) {
    //     str = str.toLowerCase().split('-');
    //     for (var i = 0; i < str.length; i++) {
    //         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     return str.join('');
    // };
}

customElements.define('router-component', RouterComponent);