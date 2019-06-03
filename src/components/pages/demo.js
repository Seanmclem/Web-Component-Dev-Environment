import { add, subtract } from '../math.js';
import lodash from 'lodash';

class DemoComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        let template = document.createElement('template');

        //example of lodash functioning as imported npm module, alongside other plain js modules
        const array = [1];
        const other = lodash.concat(array, 2, [3], [[4]]);
        console.log(other);

        template.innerHTML = /*html*/`
            <h3>Demo</h3>
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
}

const testo = "presto";

const test2 = () => {
    return 'prest2';
};

customElements.define('demo-page', DemoComponent);