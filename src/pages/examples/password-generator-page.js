class PasswordGeneratorPage extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
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
                
                e-password-generator {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
                
                .container {
                    max-width: 1300px;
                    min-height: calc(100vh - 100px);
                    margin: 0 auto;
                    padding: 0 16px;
                    background-color: var(--base-background-color);
                }
            </style>
            
            <div class="password-generator-page">
                <e-header></e-header>
                <div class="container">
                    <e-password-generator></e-password-generator>
                </div>
                <e-footer></e-footer>
            </div>
        `;
    }
}

window.customElements.define('password-generator-page', PasswordGeneratorPage);