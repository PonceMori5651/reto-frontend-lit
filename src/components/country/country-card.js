import { LitElement, html, css } from 'lit';

export class CountryCard extends LitElement {

    static get properties() {
        return {
            country: { type: Object },
            isFavorite: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.country = {};
        this.isFavorite = false;
    }

    static styles = [
        css`
            :host {
                display: block;
                animation: fadeIn 300ms ease-out;
            }

            .card {
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.08);
                overflow: hidden;
                transition: transform 0.2s ease;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }

            .card:hover {
                transform: translateY(-4px);
            }

            img {
                width: 150px;
                height: 120px;
                object-fit: cover;
            }

            .content {
                padding: 12px;
            }

            h3 {
                margin: 0 0 8px;
                font-size: 1rem;
            }

            p {
                margin: 4px 0;
                font-size: 0.85rem;
                color: #555;
            }

            button {
                margin-top: 8px;
                width: 50%;
                padding: 6px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                font-size: 0.85rem;
                background: var(--primary, #1e90ff);
                color: white;
            }

            button.fav {
                background: crimson;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

        `
    ];

    markFavorite() {
        this.isFavorite = !this.isFavorite;

        this.dispatchEvent(new CustomEvent('favorite-mark', {
            detail: {
                country: this.country,
                favorite: this.isFavorite
            },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        if (!this.country?.name) return null;
        return html`
        <div class="card">
            <img
            src="${this.country.flags?.png}"
            alt="Bandera de ${this.country.name.common}"
            />

            <div class="content">
                <h3>${this.country.name.common}</h3>

                <p><strong>Población:</strong>
                    ${this.country.population?.toLocaleString()}
                </p>

                <p><strong>Capital:</strong>
                    ${this.country.capital?.[0] || '—'}
                </p>
            </div>
            <button
                class="${this.isFavorite ? 'fav' : ''}"
                @click=${this.markFavorite}
            >${this.isFavorite ? 'Quitar favorito' : 'Agregar favorito'}
            </button>
        </div>
        `;
    }
}
customElements.define('country-card', CountryCard);
