class AboutPage extends HTMLElement {
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
                
                .container {
                    max-width: 1300px;
                    min-height: calc(100vh - 100px);
                    margin: 0 auto;
                    padding: 0 16px;
                    background-color: var(--base-background-color);
                }
                
                .container > h1 {
                    color: var(--light-color);
                    font-size: 24px;
                    text-align: center;
                    margin-top: 32px;
                }
            </style>
            
            <div class="about-page">
                <e-header></e-header>
                <div class="container">
                    <h1>About page coming soon...</h1>
                </div>
                <e-footer></e-footer>
            </div>
        `;
    }
}

window.customElements.define('about-page', AboutPage);
