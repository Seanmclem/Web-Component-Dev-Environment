(function() {
    class RouteLink extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode: 'open'});
            const template = document.createElement('template');
            //this.routeChange = this.routeChange.bind(this)
//debugger;
            template.innerHTML = /*html*/`

                <a href="#">
                    <slot></slot>
                </a>

            `;


            const templateContent = template.content.cloneNode(true);
            templateContent.firstElementChild.onclick = (e) => {
                e.preventDefault();
                const path = this.getAttribute("path");
                const title = this.getAttribute("title");
                window.history.pushState("", title, `/${path}`); //data, title, path... data?
                //on route click -> changes-route here ^ -> dispatches event to router.js to update slot name/content
                // create and dispatch the event
                var event = new CustomEvent("routed", {
                    bubbles: true,
                    composed: true, //https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
                    detail: {
                        path: path
                    }
                });
                this.dispatchEvent(event); //dispatch does what

                //^^ title not eorking... what gives?
                // var event = new CustomEvent('doRoute', {test: `/${path}`});
                // this.dispatchEvent(event);
                // this.dispatchEvent(new CustomEvent('doRoute'));
            }
            shadow.appendChild(templateContent);
        };

        static get observedAttributes() {//..more
            return ['path', 'title'];
        }

    }



    customElements.define('route-link', RouteLink);
})()