class EFooter extends HTMLElement {
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
            
                a {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }
                
                .footer__container a:hover {
                    color: var(--base-text-color)
                }
                
                footer {
                    height: 100px;
                    background-color: var(--base-background-color);
                    border-top: 1px solid #383838;
                }
              
                .footer__container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 24px 16px;
                }  
                
                .footer__container > p {
                    color: var(--base-text-color);
                }
                
                .footer__container a {
                    color: var(--light-color);
                    transition: ease .4s;
                }
            </style>

            <footer>
                <div class="footer__container">
                   <p>Released under the 
                       <a href="https://opensource.org/licenses/MIT">MIT License</a>.
                   </p>
                   <p>Copyright © 2023 emilburganov</p>
                </div>
            </footer> 
        `;
    }
}

customElements.define('e-footer', EFooter);