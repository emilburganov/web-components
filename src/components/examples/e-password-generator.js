class EPasswordGenerator extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    get password() {
        return this.getAttribute('password');
    }

    set password(value) {
        this.setAttribute('password', value);
    }

    generatePassword() {
        this.password = window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36);
    }

    copyPassword() {
        navigator.clipboard.writeText(this.password)
            .then(() => {
                alert('Password copied');
            });
    }

    static get observedAttributes() {
        return ['password'];
    }

    attributeChangedCallback(name) {
        if (name === 'password') {
            this.render();
            this.createEvents();
        }
    }

    createEvents() {
        this.generatePasswordButton = this.shadow.querySelector('.password-generator__button');
        this.generatePasswordButton.addEventListener('click', this.generatePassword.bind(this));

        this.copyPasswordButton = this.shadow.querySelector('.password-copy__button');
        this.copyPasswordButton.addEventListener('click', this.copyPassword.bind(this));

        this.passwordButton = this.shadow.querySelector('.password-generator__button');
        this.passwordButton.addEventListener('click', () => {
            setTimeout(() => {
                this.passwordButton.classList.add('rotate');
            }, 0);
        });
    }

    connectedCallback() {
        this.generatePassword();
        this.render();
        this.createEvents();
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    font-family: Inter, sans-serif;
                }
                
                .password-generator {
                    max-width: 800px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    background: -webkit-linear-gradient(315deg, var(--primary-color) 35%, var(--secondary-color));
                    padding: 20px;
                    border-radius: 8px;
                }
                
                .password-generator > h3 {
                    color: var(--light-color);
                    font-size: 20px;
                    font-weight: 600;
                }
                
                .password-generator__password {
                    width: 100%;
                    min-width: 180px;
                    padding: 10px;
                    border-radius: 8px;
                    background-color: var(--light-color);
                    color: var(--base-background-color);
                    font-size: 18px;
                    font-weight: 500;
                }
                
                .password-generator__button {
                    background-color: transparent;
                    max-width: 24px;
                    max-height: 24px;
                    border: none;
                    cursor: pointer;
                    transition: ease transform .6s;
                }
                
                .password-generator__button.rotate {
                    transform: rotate(360deg);
                }
                
                .password-generator__container {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
            </style> 
            
            <div class="password-generator">
                <h3>Generated password:</h3>
                <div class="password-generator__container">
                    <p class="password-generator__password">${this.password}</p>
                    <button class="password-generator__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="0" y="0" viewBox="0 0 512.449 512.449" xml:space="preserve" class=""><g transform="matrix(1.8369701987210297e-16,-1,-1,-1.8369701987210297e-16,512.4487810134887,512.4487810134889)"><path d="M152.083 286.805c7.109-8.155 1.318-20.888-9.501-20.888H110.19a147.458 147.458 0 0 1-.329-9.692c0-80.706 65.658-146.364 146.363-146.364 38.784 0 74.087 15.168 100.304 39.877l45.676-53.435c-39.984-36.577-91.44-56.612-145.98-56.612-57.838 0-112.214 22.524-153.112 63.421-40.897 40.898-63.421 95.274-63.421 153.112 0 3.243.081 6.473.222 9.692H12.629c-10.819 0-16.611 12.733-9.501 20.888l61.549 70.6 12.928 14.829 46.416-53.242zM509.321 245.614l-45.907-52.658-28.57-32.771-40.791 46.789-33.686 38.64c-7.109 8.155-1.318 20.888 9.501 20.888h32.354c-5.293 75.928-68.748 136.086-145.997 136.086-33.721 0-64.811-11.469-89.586-30.703l-45.679 53.439c38.267 30.731 85.479 47.434 135.266 47.434 57.838 0 112.214-22.523 153.112-63.421 38.466-38.466 60.672-88.856 63.177-142.834h27.306c10.818-.001 16.609-12.734 9.5-20.889z" fill="#ffffff" opacity=".85"></path></g></svg>
                    </button>                
                </div>
                <div>
                    <e-button class="password-copy__button">Copy password</e-button>
                </div>
            </div> 
        `;
    }
}

customElements.define('e-password-generator', EPasswordGenerator);