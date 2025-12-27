import { LitElement, html, css } from 'lit';

export class AppLoader extends LitElement {

    static get properties() {
        return {
            active: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.active = true;
    }
    static styles = [
        css`
            :host {
                display: block;
            }
            .overlay {
            position: fixed;
            inset: 0;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            }

            .spinner {
            width: 50px;
            height: 50px;
            border: 6px solid #ddd;
            border-top-color: #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            }

            @keyframes spin {
            to {
                transform: rotate(360deg);
                }
            }
        `
    ];

    render() {
        return html`
            ${this.active
                ? html`
                <div class="overlay">
                    <div class="spinner"></div>
                </div>
                `
                : html``}
                `;
    }
}
customElements.define('app-loader', AppLoader);
