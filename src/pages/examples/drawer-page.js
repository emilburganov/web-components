class DrawerPage extends HTMLElement {
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    padding: 0 16px;
                    background-color: var(--base-background-color);
                }      
            </style>
            
            <div class="drawer-page">
                <e-header></e-header>
                <div class="container">
                   <e-drawer></e-drawer>
                </div>
                <e-footer></e-footer>
            </div>
        `;
    }
}

window.customElements.define('drawer-page', DrawerPage);