import { LitElement, html, css } from 'lit';

export class EmptyState extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            icon: { type: String },
        };
    }

    constructor() {
        super();
        this.title = "No hay información";
        this.description = "No se encontraron datos para mostrar";
        this.icon = "✘";
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .container {
                padding: 2rem;
                text-align: center;
                color: #6b7280;
            }

            .icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            h2 {
                margin: 0;
                font-size: 1.25rem;
                color: #374151;
            }

            p {
                margin-top: 0.5rem;
                font-size: 0.95rem;
            }
        `
    ];

    render() {
        return html`
        <div class="container">
            <div class="icon">${this.icon}</div>
            <h2>${this.title}</h2>
            <p>${this.description}</p>
        </div>
        `;
    }
}
customElements.define('empty-state', EmptyState);
