import { LitElement, html, css } from 'lit';

export class CountryModal extends LitElement {

    static get properties() {
        return {
            country: { type: Object }
        };
    }

    constructor() {
        super();
        this.country = null;
    }

    static styles = css`
        :host {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(2px);
        }
        .modal {
            position: relative;
            background: white;
            border-radius: 12px;
            padding: 20px;
            max-width: 720px;
            width: 40%;
            max-height: 90%;
            overflow: auto;
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            z-index: 1;
        }
        .close {
            position: absolute;
            right: 12px;
            top: 12px;
            background: transparent;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
        }
        .header {
            display: flex;
            gap: 16px;
            align-items: center;
            margin-bottom: 12px;
        }
        img.flag {
            width: 120px;
            height: 80px;
            object-fit: cover;
            border-radius: 6px;
        }
        .rows p {
            margin: 6px 0;
        }
    `;

    close() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }

    render() {
        if (!this.country) return html``;
        return html`
        <div class="overlay" @click=${this.close}></div>
        <div class="modal" @click=${(e)=>e.stopPropagation()}>
            <button class="close" @click=${this.close}>✖</button>

            <div class="header">
                <img class="flag" src="${this.country.flags?.png}" alt="Bandera de ${this.country.name?.common}" />
                <div>
                    <h3>${this.country.name?.common}</h3>
                    <p><strong>Región:</strong> ${this.country.region || '—'}</p>
                    <p><strong>Subregión:</strong> ${this.country.subregion || '—'}</p>
                </div>
            </div>

            <div class="rows">
                <p><strong>Población:</strong> ${this.country.population?.toLocaleString() || '—'}</p>
                <p><strong>Capital:</strong> ${this.country.capital?.[0] || '—'}</p>
                <p><strong>CCA3:</strong> ${this.country.cca3 || '—'}</p>
                <p><strong>Idiomas:</strong> ${this.country.languages ? Object.values(this.country.languages).join(', ') : '—'}</p>
                <p><strong>Moneda:</strong> ${this.country.currencies ? Object.values(this.country.currencies).map(c=>c.name).join(', ') : '—'}</p>
            </div>
        </div>
        `;
    }
}
customElements.define('country-modal', CountryModal);
