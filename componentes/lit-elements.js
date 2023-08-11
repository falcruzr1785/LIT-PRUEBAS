

//import Swal from 'sweetalert2'
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@8/src/sweetalert2.js'

// import { LitElement, html, css } from 'lit';
// //lit basico
// export class LitElements extends LitElement {
//     static styles = [
//         css`
//             :host {
//                 display: block;
//             }
//         `
//     ];

//     render() {
//         return html`<h1> hola </h1>`;
//     }
// }
// customElements.define('lit-elements', LitElements);

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })