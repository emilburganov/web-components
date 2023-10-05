class EButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    get class() {
        return this.getAttribute('class');
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
            
                button {
                    background-color: var(--base-button-color);
                    color: var(--light-color);
                    border: none;
                    border-radius: 8px;
                    padding: 10px 15px;
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: .5s ease all;
                }
                
                button:hover {
                    opacity: .9;
                }
                
                .title-button {
                    color: var(--light-text-color);
                }
                
                .danger-button {
                    background-color: var(--danger-color);
                    color: var(--light-color);
                }
                
                .success-button {
                    background-color: var(--success-color);
                    color: var(--light-color);
                }
                
                .image-button {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            </style>
            
            <button class="${this.class}">
               <slot></slot>
            </button>
        `;
    }
}

customElements.define('e-button', EButton);