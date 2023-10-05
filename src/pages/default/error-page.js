class ErrorPage extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    get currentLocation() {
        return window.location.pathname;
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
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    padding: 0 16px;
                    background-color: var(--base-background-color);
                }
                
                .error-page__container {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    padding: 32px 48px;
                    border-radius: 8px;
                    background-color: var(--section-background-color);
                    color: var(--light-color);
                }
            
                .error-page__container > h3 {
                    font-size: 28px;
                }
                
                .error-page__dead-link {
                    margin-bottom: 10px;
                }
                
                .error-page__dead-link > span {
                    color: var(--light-text-color)
                }
                
                .error-page__back > a {
                    text-decoration: none;
                    color: var(--primary-color)
                }
                
                @media screen and (max-width: 768px)  {    
                    .error-page__container {
                        padding: 32px;
                    }
                }
            </style>
            
            <div class="error-page">
                <e-header></e-header>
                <div class="container">
                    <div class="error-page__container">
                        <h3>Page Not Found</h3>
                        <div>
                            <p class="error-page__dead-link">You found a dead link: <span>${this.currentLocation}</span></p>
                            <p class="error-page__back">The page you're looking for no longer exists. Return to the <a href="/">home page</a>.</p>
                        </div>
                    </div>
                </div>
            </div>  
        `;
    }
}

window.customElements.define('error-page', ErrorPage);
