import { LitElement, html, css } from 'lit'
import { NavigationTemplate } from '../Navigation/navigationTemplate'; '../navigation/navigationTemplate'
import { ContentTemplate } from '../content/contentTemplate';

export class HomeTemplate extends LitElement {
    static properties = {
        _selectedNavItem: { type: String }
    }

    constructor() {
        super();
        this._selectedNavItem = `home`;
    }

    static styles = css`
        div {
            padding: 0rem;
        }
    `;

    render() {
        let { _selectedNavItem } = this;
        return html`
        <div>
            <jh-nav @navSelectionChanged=${this._navSelectionChanged}></jh-nav>
            <jh-content .selectedNavItem="${this._selectedNavItem}"></jh-content>
        </div>
        `
    }

    _navSelectionChanged(e) {
        this._selectedNavItem = e.detail;
        this.render();
    }
}

customElements.define('home-element', HomeTemplate);