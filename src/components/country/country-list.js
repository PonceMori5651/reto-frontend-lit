import { LitElement, html, css } from 'lit';
import { loadFromStorage, saveToStorage } from '../../services/countries.service.js';
import { repeat } from 'lit/directives/repeat.js';

const STORAGE_KEY = 'favorite-countries';

export class CountryList extends LitElement {

    static get properties() {
        return {
            countries: { type: Array },
            countriesFilter: { type: Array },
            favorites: { type: Array },
            searchTerm: { type: String },
            page: { type: Number },
            pageSize: { type: Number },
            selectedCountry: { type: Object }
        };
    }

    constructor() {
        super();
        this.countries = [];
        this.countriesFilter = [];
        this.searchTerm = '';
        this.favorites = [];
        this.page = 1;
        this.pageSize = 12;
        this.selectedCountry = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.favorites = loadFromStorage(STORAGE_KEY);
        this.addEventListener('search-change', (e) => {
            this.searchTerm = e.detail.toLowerCase();
            this.page = 1;
            this.applyFilters();
        });
        this.addEventListener('show-country', (e) => {
            this.selectedCountry = e.detail.country;
        });
    }

    static styles = [
        css`
            :host {
                display: block;
                margin: 80px 200px;
            }

            h2 {
                margin-bottom: 16px;
                font-size: 1.8rem;
                text-align: center;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }
        `
    ];

    willUpdate(changedProps) {
        if (changedProps.has('countries')) {
            this.page = 1;
            this.applyFilters();
        }
    }

    applyFilters() {
        let result = [...this.countries];
        if (this.searchTerm) {
            result = result.filter(c =>
                c.name.common.toLowerCase().includes(this.searchTerm)
            );
        }
        this.countriesFilter = result;
    }

    onFavoriteMark(event) {
        const { country, favorite } = event.detail;
        const code = country.cca3;

        if (favorite) {
            if (!this.favorites.includes(code)) {
                this.favorites = [...this.favorites, code];
            }
        } else {
            this.favorites = this.favorites.filter(c => c !== code);
        }

        saveToStorage(STORAGE_KEY, this.favorites);

        this.dispatchEvent(new CustomEvent('favorites-changed', {
            detail: {
                favorites: this.favorites,
                source: 'country-list'
            },
            bubbles: true,
            composed: true
        }));
    }

    totalPages() {
        return Math.ceil(this.countriesFilter.length / this.pageSize);
    }

    get paginatedCountries() {
        const start = (this.page - 1) * this.pageSize;
        return this.countriesFilter.slice(start, start + this.pageSize);
    }

    onPageChanged(e) {
        this.page = e.detail.page;
    }

    onModalClose() {
        this.selectedCountry = null;
    }
    
    render() {
        return html`
        <h2>Todos los países (por Continente)</h2>
        <country-search></country-search>
        ${!this.countriesFilter.length ? html`
            <empty-state
              title="No hay países"
              description="Seleccione el continente para mostrar los países"
              icon="✘">
            ></empty-state>` : html`
            <div class="grid">
                ${repeat(this.paginatedCountries, country => country.cca3, country => html`
                <country-card
                    .country=${country}
                    .isFavorite=${this.favorites.includes(country.cca3)}
                    @favorite-mark=${this.onFavoriteMark}
                ></country-card>
                `)}
            </div>
            <pagination-controls
                .page=${this.page}
                .totalPages=${this.totalPages()}
                @page-changed=${this.onPageChanged}
            ></pagination-controls>
        `}

        ${this.selectedCountry ? html`
            <country-modal .country=${this.selectedCountry} @close=${this.onModalClose}></country-modal>
        ` : ''}
        `;
    }
}
customElements.define('country-list', CountryList);
