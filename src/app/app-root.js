import { LitElement, html, css } from 'lit';
import { getCountriesByRegion, loadFromStorage } from '../services/countries.service.js';

const STORAGE_KEY = 'favorite-countries';
export class AppRoot extends LitElement {
    static get properties() {
        return {
            countries: { type: Array },
            favorites: { type: Array },
            loading: { type: Boolean },
            continent: { type: Array },
            selectedCountry: { type: String },
            view: { type: String }
        };
    }

    constructor() {
        super();
        this.countries = [];
        this.favorites = [];
        this.selectedCountry = '';
        this.view = 'countries';
        this.loading = true;
        this.continent = ['America', 'Europe', 'Asia', 'Africa'];
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .title_nav {
                display: flex;
                justify-content: space-between;
                padding: 16px 32px;
                background-color: #ffffff;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            }

            .title_nav strong {
                font-size: 1.25rem;
                font-weight: 600;
            }

            .title_nav nav ul {
                list-style-type: none;
                display: flex;
                gap: 25px;
            }

            .title_nav nav ul li {
                color: #6b7280;
                cursor: pointer;
            }

            .title_nav nav ul li:hover {
                color: #2563eb;
            }
            .top {
                background-color: #111827;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                font-size: 0.85rem;
            }

            .top span {
                color: #fff;
                
            }

            .top a {
                text-decoration: none;
                color: #fff;
                cursor: pointer;
                opacity: 0.8;
            }

            .top a:hover {
                opacity: 1;
            }
        `
    ];

    connectedCallback() {
        super.connectedCallback();
        this.loadCountries();
    }

    selectedContinent(e) {
        this.selectedCountry = e.detail;
        this.loadCountries(this.selectedCountry);
    }

    async loadCountries(region) {
        if (!region) {
            this.loading = false;
            return;
        }
        this.countries = await getCountriesByRegion(region);
        this.favorites = loadFromStorage(STORAGE_KEY);
        this.loading = false;
    }

    showCountries() {
        this.view = 'countries';
    }

    showFavorites() {
        this.view = 'favorites';
    }

    onFavoritesChanged(e) {
        this.favorites = e.detail.favorites;
    }

    getFavoriteCountries() {
        return this.countries.filter(c =>
            this.favorites.includes(c.cca3)
        );
    }

    render() {
        return html`
            <div>
                <div class="top">
                    <span>🌎 Países de América · API restcountries</span>
                    <a href="https://poncemori5651.github.io/angular-peliculas/#/" target="_blank">GitHub (Último proyecto con Angular)</a>
                </div>
                <div class="title_nav">
                    <strong>🌍Reto FrontEnd</strong>
                    <nav>
                        <ul>
                            <li @click=${this.showCountries}>Inicio</li>
                            <li @click=${this.showFavorites}>Favoritos</li>
                        </ul>
                    </nav>
                </div>
            </div>
            ${this.loading ? html`<app-loader .active=${this.loading}></app-loader>`
                : html`
            <title-filter 
            title="Países de: " 
            .iterable=${this.continent}
            @continent-selected=${this.selectedContinent}
            ></title-filter>
            ${this.view === 'countries' ? html`
                <country-list 
                .countries=${this.countries}
                @favorites-changed=${this.onFavoritesChanged}
                ></country-list>
            ` : html`
                <favorite-list 
                .favoritesComplete=${this.getFavoriteCountries()}
                @favorites-changed=${this.onFavoritesChanged}
                ></favorite-list>
                `}
            `
            }
        `;
    }
}
customElements.define('app-root', AppRoot);
