import { LitElement, html, css } from 'lit'
import Image1 from '../Images/image1.jpg'
import Image2 from '../Images/image2.jpg'
import { FooterTemplate } from '../common/footerTemplate';

export class LandingTemplate extends LitElement {
    static styles = css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            flex-grow: 1;
        }

        /* Add styles for the gallery container */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        /* Style individual image items */
        .gallery-item {
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .gallery-item img {
            display: block;
            width: 100%;
            height: auto;
            transition: transform 0.3s ease;
        }

        /* Add hover effect to images */
        .gallery-item:hover img {
            transform: scale(1.1);
        }
    `;

    render() {
        return html`
            <div id="landing">
                <div class="gallery-item">
                    <img src="${Image1}" alt="Image1" />
                </div>
                <div class="gallery-item">
                    <img src="${Image2}" alt="Image2" />
                </div>
            
                <footer>
                    <jh-footer></jh-footer>
                </footer>
            </div>
        `
    }

    static properties = {
        galleryItems: { type: Array }
    }

    constructor() {
        super();
        this.galleryItems = [];
    }
}

customElements.define('jh-landing', LandingTemplate);