 
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

const data = {
    title: 'Operación Exitosa',
    message: 'El proceso se completó correctamente.',
    status: 'success'
};

// Utilizamos Swal.fire para mostrar una ventana emergente
Swal.fire(
    data.title,
    data.message,
    data.status
).then(() => {
    if (data.status === 'success') {
        console.log('Hacer algo después de una operación exitosa...');
    }
});