import { LitElement, html, css } from 'lit';

export class PaginationControls extends LitElement {

    static get properties() {
        return {
            page: { type: Number },
            totalPages: { type: Number }
        };
    }

    constructor() {
        super();
        this.page = 1;
        this.totalPages = 1;
    }

    static styles = [
        css`
            :host {
                display: flex;
                justify-content: center;
                margin: 24px 0;
            }
            .pagination {
                display: flex;
                gap: 8px;
                align-items: center;
            }

            button {
                padding: 6px 12px;
                border: none;
                border-radius: 6px;
                background: #eee;
                cursor: pointer;
            }

            button:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }

            .active {
                background: #1e90ff;
                color: white;
                font-weight: bold;
            }
        `
    ];

    changePage(page) {
        if (page < 1 || page > this.totalPages) return;

        this.dispatchEvent(new CustomEvent('page-changed', {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
        <div class="pagination">
            <button
            ?disabled=${this.page === 1}
            @click=${() => this.changePage(this.page - 1)}
            >
            ◀
            </button>

            ${Array.from({ length: this.totalPages }, (_, i) => {
            const p = i + 1;
            return html`
                <button
                class=${this.page === p ? 'active' : ''}
                @click=${() => this.changePage(p)}
                >
                ${p}
                </button>
            `;
            })}

            <button
            ?disabled=${this.page === this.totalPages}
            @click=${() => this.changePage(this.page + 1)}
            >
            ▶
            </button>
        </div>
        `;
    }
}
customElements.define('pagination-controls', PaginationControls);
