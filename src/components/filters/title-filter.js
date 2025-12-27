import { LitElement, html, css } from 'lit';

export class TitleFilter extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            iterable: { type: Array }
        };
    }

    constructor() {
        super();
        this.iterable = [];
    }

    static styles = [
        css`
            :host {
                display: block;
                text-align: center;
            }

            .title {
                font-size: 1.4rem;
                font-weight: 600;
                color: #111827;
                margin-top: 4rem;
                display: inline-block;
                margin-right: 20px;
            }

            .select-wrapper {
                position: relative;
                width: 260px;
                display: inline-block;
            }

            .select-wrapper select {
                width: 100%;
                padding: 0.6rem 2.4rem 0.6rem 0.8rem;
                font-size: 0.95rem;
                color: #111827;
                background-color: #fff;
                border: 1px solid #e5e7eb;
                border-radius: 8px;

                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;

                cursor: pointer;
                transition: border-color 0.15s ease, box-shadow 0.15s ease;
            }

            .select-wrapper::after {
                content: "▾";
                position: absolute;
                right: 0.8rem;
                top: 50%;
                transform: translateY(-50%);
                pointer-events: none;
                color: #6b7280;
            }

            .select-wrapper select:focus {
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
            }

            .select-wrapper option[disabled] {
                color: #9ca3af;
            }
        `
    ];
    
    selectChange(e) {
        const value = e.target.value;
        this.selected = value;
        this.dispatchEvent(new CustomEvent('continent-selected', {
            detail: value,
            bubbles: true,
            composed: true
        }));
  }
    render() {
        return html`
            <h1 class="title">${this.title}</h1>
            <div class="select-wrapper">
                <select
                @change=${this.selectChange}>
                    <option value="" disabled selected>Selecciona un país</option>
                    ${this.iterable.map(
                        element => 
                        html`
                        <option value=${element.toLowerCase()}>
                            ${element}
                        </option>
                        `
                    )}
                </select>
            </div>
        `;
    }
}
customElements.define('title-filter', TitleFilter);
