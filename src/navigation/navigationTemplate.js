import { LitElement, html, css } from 'lit'

export class NavigationTemplate extends LitElement {

    static properties = {
        _selectedMenu: { type: String }
    }

    static styles = css`
            #navbar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000; /* Ensure the navigation bar is above other elements */
            }
            
            #navbar ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-around; /* Adjust as needed */
            }
              
            #navbar li {
                padding: 10px;
                color: #ff3300;
                font-size: 150%;
                font-family: sans-serif;
                cursor: pointer
            }

            .selected {
                color: #990033
            }
        `;
    
    constructor(){
        super();
        this._selectedMenu = `home`;
    }

    render() {
        let { _selectedMenu } = this;
        return html`
        <nav id="navbar">
            <ul>
                <li @click=${this._home}><span class=${_selectedMenu == `home` ? `selected`:``}>Home</span></li>
                <li @click=${this._gallery}><span class=${_selectedMenu == `gallery` ? `selected`:``}>Gallery</span></li>
                <li @click=${this._contact}><span class=${_selectedMenu == `contact` ? `selected`:``}>Contact</span></li>
                <li @click=${this._about}><span class=${_selectedMenu == `about` ? `selected`:``}>About</span></li>
            </ul>
        </nav>
        `;
    }

    //private methods
    _home() {
        this._selectedMenu = 'home';
        this._dispatchMenuSelectionChangedEvent();
    }

    _gallery() {
        this._selectedMenu = 'gallery';
        this._dispatchMenuSelectionChangedEvent();
    }

    _contact() {
        this._selectedMenu = 'contact';
        this._dispatchMenuSelectionChangedEvent();
    }

    _about() {
        this._selectedMenu = 'about';
        this._dispatchMenuSelectionChangedEvent();
    }


    _dispatchMenuSelectionChangedEvent() {
        var event = new CustomEvent("navSelectionChanged", { detail: this._selectedMenu });
        this.dispatchEvent(event);
    }
}

customElements.define('jh-nav', NavigationTemplate);