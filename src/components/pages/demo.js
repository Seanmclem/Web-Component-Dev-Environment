import { subtract } from '../math.js';
import lodash from 'lodash';

class DemoPage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        let template = document.createElement('template');

        //example of lodash functioning as imported npm module, alongside other plain js modules
        const array = [1];
        const other = lodash.concat(array, 2, [3], [[4]]);
        console.log(other);

        this.render(template, other);

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);

        var tests = this.test();
        var secondTest = test2();
        var hat = "shoe";
        //

    };
    // connectedCallback() {
    // }
    // disconnectedCallback() {
    // }
    // attributeChangedCallback(attrName, oldVal, newVal) {
    // }
    test() {
        return 'test';
    }

    render(template, other) {

        template.innerHTML = /*html*/`
            <h3>Demo</h3>
            lodash  output ${other}
            <div> 
                five minus one equals = ${subtract(5, 1)}  
            </div>
            <a rel="noopener" target="_blank" href="http://www.google.com">
                Click me to go to google!
            </a>

            <style>
            :host {
              display: inline;
            }
            :host([hidden]) {
              display: none;
            }
            </style>
        `;
    }
}

const testo = "presto";

const test2 = () => {
    return 'prest2';
};

customElements.define('demo-page', DemoPage);