import { LitElement, html, css } from 'lit'

export class ContactTemplate extends LitElement {
    static properties = {
        _name: { type: String },
        _email: { type: String },
        _phone: { type: String },
        _date: { type: String },
        _hours: { type: String },
        _eventType: { type: String },
        _additionalInfo: { type: String },
        _isFormValid: { type: Boolean }
    };

    static styles = css`
        #contact {
            background-color: #f4f4f4;
            padding: 2rem;
            flex-grow: 1;
        }

        header {
            text-align: center;
            padding: 20px;
        }

        h1 {
            font-size: 24px;
            margin: 0;
        }

        section {
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 5px;
        }

        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        input[type="number"],
        select,
        textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 16px;
        }

        textarea {
            resize: vertical;
        }

        button[type="submit"] {
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 3px;
            padding: 10px 20px;
            cursor: pointer;
        }

        button[type="submit"]:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    `;

    constructor() {
        super();
        this._name = '';
        this._email = '';
        this._phone = '';
        this._eventDate = '';
        this._numberOfHours = '';
        this._eventType = 'Wedding';
        this._additionalInfo = '';
        this._isFormValid = false;
    }

    _isValidEmail(email) {
        // Regular expression for email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    handleInputChange() {
        // Check form validity whenever an input field changes
        this._isFormValid = this._name != ``
            && this._isValidEmail(this._email)
            && this._phone != ``
            && this._eventDate != ``
            && this._numberOfHours != ``
            && this._eventType != ``
            && this._additionalInfo != ``;
    }

    _nameChanged(e) {
        this._name = e.target.value;
        this.handleInputChange();
    }

    _emailChanged(e) {
        if (this._isValidEmail(e.target.value)) {
            this._email = e.target.value;
            this.handleInputChange();
        }
    }

    _phoneChanged(e) {
        this._phone = e.target.value;
        this.handleInputChange();
    }

    _dateChanged(e) {
        this._eventDate = e.target.value;
        this.handleInputChange();
    }

    _numberOfHoursChanged(e) {
        this._numberOfHours = e.target.value;
        this.handleInputChange();
    }

    _additionalInfoChanged(e) {
        this._additionalInfo = e.target.value;
        this.handleInputChange();
    }

    _eventTypeChanged(e) {
        this._eventType = e.target.value;
        this.handleInputChange();
    }

    render() {
        let { _name, _email, _phone, _eventDate, _numberOfHours, _eventType, _additionalInfo, _isFormValid } = this;
        return html`
        <div id="contact">
            <header>
                <h1>Contact Us</h1>
            </header>

            <section>
                <h2>Contact Information</h2>
                <form id="contact-form">
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        .value="${_name}"
                        @change="${this._nameChanged}"
                        required
                    >
                    <label for="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        .value="${_email}"
                        @input="${this._emailChanged}"
                        required
                    >
                    <label for="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        .value="${_phone}"
                        @input="${this._phoneChanged}"
                        required
                    >
                    <label for="date">Date of Event:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        .value="${_eventDate}"
                        @input="${this._dateChanged}"
                        required
                    >
                    <label for="hours">Number of Hours of Coverage:</label>
                    <input
                        type="number"
                        id="hours"
                        name="hours"
                        .value="${_numberOfHours}"
                        @input="${this._numberOfHoursChanged}"
                        required
                    >
                    <label for="event-type">Event Type:</label>
                    <select
                        id="event-type"
                        name="event-type"
                        .value="${_eventType}"
                        @change="${this._eventTypeChanged}"
                        required
                    >
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Other">Other</option>
                    </select>
                    <label for="additional-info">Additional Information (max 1000 characters):</label>
                    <textarea
                        id="additional-info"
                        name="additional-info"
                        .value="${_additionalInfo}"
                        rows="6"
                        maxlength="1000"
                        @input="${this._additionalInfoChanged}"
                        required
                    ></textarea>
                    <button type="submit" ?disabled="${!_isFormValid}">Submit</button>
                </form>
            </section>

            <footer>
                <!-- Add footer content if needed -->
            </footer>
        </div>
    `;
    }
}

customElements.define('jh-contact', ContactTemplate);