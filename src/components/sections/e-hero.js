class EHero extends HTMLElement {
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
               
                .hero {
                    padding: 64px 0;
                    text-align: center;
                }
                
                .hero__tagline {
                    font-size: 64px;
                    word-break: break-word;
                    background: -webkit-linear-gradient(315deg, var(--primary-color) 35%, var(--secondary-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .hero__description {
                    max-width: 960px;
                    color: var(--base-text-color);
                    font-size: 22px;
                    margin: 24px auto 48px;
                }
                
                .hero__icon {
                    fill: var(--light-text-color);
                }
                
                .hero__actions {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 16px;
                }      
                
                .hero__button {
                    background-color: var(--base-button-color);
                    color: var(--light-text-color);
                    border-radius: 5px;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: 500;
                    transition: .5s ease all;
                    text-decoration: none;
                }   
                
                .hero__button:hover {
                    opacity: .9;
                }
                
                @media screen and (max-width: 768px)  {    
                    .hero {
                        padding: 48px 0;
                    }
                  
                    .hero__tagline {
                        font-size: 32px;
                    }
                    
                    .hero__description {
                        font-size: 18px;
                    }
                }   
            </style>

            <section class="hero">
                <h1 class="hero__tagline">Vanilla <br> JavaScript WebComponents Library</h1>
                <p class="hero__description">A simple, reactive and versatile library for building websites.</p>
                <div class="hero__actions">
                    <a class="route hero__button" href="/documentation">
                        Get Started 
                        <svg class="hero__icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path></svg>
                    </a>
                    <a class="hero__button" href="https://github.com/emilburganov/web-components">
                        GitHub
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define('e-hero', EHero);