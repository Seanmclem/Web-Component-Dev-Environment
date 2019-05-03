class MainComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');

        template.innerHTML = /*html*/`
            <div class="main-body">
                <h3>main</h3>
                <div>
                 this is the main component right here
                </div>
            </div>

        `;

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    };
}

customElements.define('main-component', MainComponent);