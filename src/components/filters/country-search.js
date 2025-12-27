import { LitElement, html, css } from 'lit';

export class CountrySearch extends LitElement {

    static get properties() {
        return {
            value: { type: String }
        };
    }

    constructor() {
        super();
        this.value = '';
    }

    static styles = [
        css`
            :host {
                display: block;
                max-width: 400px;
                margin: 1rem auto;
            }
            .search-container {
                display: flex;
                gap: 0.5rem;
            }

            input {
                flex: 1;
                padding: 0.75rem 1rem;
                font-size: 1rem;
                border-radius: 8px;
                border: 1px solid #ccc;
                outline: none;
            }

            input:focus {
                border-color: #3b82f6;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
            }

            button {
                padding: 0 1rem;
                border-radius: 8px;
                border: none;
                background-color: #ef4444;
                color: white;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s ease, transform 0.1s ease;
            }

            button:hover {
                background-color: #dc2626;
            }

            button:active {
                transform: scale(0.95);
            }

            button:disabled {
                background-color: #fca5a5;
                cursor: not-allowed;
            }
        `
    ];

    onInput(e) {
        const newValue = e.target.value;
        this.value = newValue;

        this.dispatchEvent(new CustomEvent('search-change', {
            detail: this.value,
            bubbles: true,
            composed: true
        }));
    }

    clear() {
        this.value = '';

        this.dispatchEvent(new CustomEvent('search-change', {
            detail: '',
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
        <div class="search-container">
            <input
                type="text"
                placeholder="Buscar país..."
                .value=${this.value}
                @input=${this.onInput}
            />
            <button
                @click=${this.clear}
                ?disabled=${!this.value}
            >
                Limpiar
            </button>
        </div>
        `;
    }
}
customElements.define('country-search', CountrySearch);
