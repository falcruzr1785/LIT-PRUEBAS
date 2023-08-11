 
import { LitElement, html, css } from 'lit';
//lit basico
export class LitElements extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<h1> hola </h1>`;
    }
}
customElements.define('lit-elements', LitElements);
