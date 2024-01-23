import { LitElement, html, css } from 'lit'
import logo from '../Images/logo_1563.png'
import { FooterTemplate } from '../common/footerTemplate';

export class AboutTemplate extends LitElement {

    static styles = css`
        #about {
            padding:2rem;
            background: black;
            flex-grow: 1;
        }
        #about > img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 400px;
            height: 400px;
        }
        #about > header {
            color: white;
            margin-left:5rem;
            margin-right:5rem;
        }
        #about > section {
            margin-left:5rem;
            margin-right:5rem;
            color: white;
        }
    `;

    render() {
        return html`
            <div id="about">
                <img width="400" height="400" src="${logo}" alt="JHalak" />
                <header>
                    <h1>About Jhalak Photography and Videography</h1>
                </header>
        
                <section>
                    <h2>Our Story</h2>
                    <p>
                        Our journey began with a deep love for visual storytelling. Over the years, we have honed our craft and developed a keen eye for detail, enabling us to capture the essence of every event we cover. From intimate family gatherings to grand celebrations, we have had the privilege of documenting a wide range of occasions, including kids' birthdays and housewarming parties.
                    </p>
                </section>
            
                <section>
                    <h2>Our Approach</h2>
                    <ul>
                        <li>
                            <strong>Quality Matters:</strong> We believe that every moment deserves the highest level of attention and care. That's why we invest in top-of-the-line professional-grade equipment to ensure that your photos and videos are of the utmost quality.
                        </li>
                        <li>
                            <strong>Passion and Creativity:</strong> Our team is driven by a passion for creativity. We don't just capture images; we tell stories. We seek out the unique, the emotional, and the memorable, turning fleeting moments into lasting treasures.
                        </li>
                        <li>
                            <strong>Personalized Service:</strong> We understand that every event is unique. That's why we work closely with our clients to tailor our services to their specific needs and preferences. Your vision is our guide, and we're here to make it a reality.
                        </li>
                    </ul>
                </section>
            
                <section>
                    <h2>What We Offer</h2>
                    <ul>
                        <li><strong>Photography:</strong> Our skilled photographers are experts at capturing the perfect shot. Whether it's a candid moment, a posed portrait, or a stunning landscape, we have the expertise to make every photo shine.</li>
                        <li><strong>Videography:</strong> Our videographers bring your events to life through dynamic and cinematic storytelling. From event highlights to full-length videos, we create compelling narratives that you'll want to relive again and again.</li>
                        <li><strong>Professionalism:</strong> When you choose Jhalak Photography and Videography, you can expect a professional and friendly team dedicated to delivering exceptional results. We arrive on time, dress professionally, and conduct ourselves with the utmost respect for your event.</li>
                    </ul>
                </section>
            
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        Let us be a part of your next special occasion and help you preserve the moments that matter most. Contact us today to discuss your photography and videography needs. We look forward to creating beautiful memories together.
                    </p>
                </section>
            
                <footer>
                    <jh-footer></jh-footer>
                </footer>
            </div>
        `
    }
}

customElements.define('jh-about', AboutTemplate);