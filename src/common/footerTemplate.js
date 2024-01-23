import { LitElement, html, css } from 'lit'
import logo from '../Images/logo_1563.png'

export class FooterTemplate extends LitElement {

    static styles = css`
        #footer {
            margin:0;
            padding:0rem;
            height:50px;
            flex-shrink: 0;
        }

        .logo > img {
            width:100px;
            height:100px;
        }
    `;

    render() {
        return html`
            <div id="footer">
                <div class="logo">
                    <img src="${logo}" alt="Logo" />
                </div>
            </div>
        `;
    }
}

customElements.define('jh-footer', FooterTemplate);