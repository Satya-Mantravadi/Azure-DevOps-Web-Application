import { LitElement, html } from 'lit'

export class GalleryTemplate extends LitElement {

    render() {
        return html`
            <div class="gallery">
                <div class="rows">
                    <div class="image">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('jh-gallery', GalleryTemplate);