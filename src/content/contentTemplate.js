import { LitElement, html } from 'lit'
import { LandingTemplate } from '../landing/landingTemplate';
import { GalleryTemplate } from '../gallery/galleryTemplate';
import { ContactTemplate } from '../contact/contactTemplate';
import { AboutTemplate } from '../about/aboutTemplate';

export class ContentTemplate extends LitElement {

    static properties = {
        selectedNavItem: { type: String }
    }

    render() {
        let { selectedNavItem } = this;
        return html`
            ${selectedNavItem ? html`
                ${selectedNavItem == `home` ? html`<jh-landing></jh-landing>`
                    : selectedNavItem == `gallery` ? html`<jh-gallery></jh-gallery>`
                        : selectedNavItem == `contact` ? html`<jh-contact></jh-contact>`
                            : html`<jh-about></jh-about>`}
            ` : ``}
        `
    }
}

customElements.define('jh-content', ContentTemplate);