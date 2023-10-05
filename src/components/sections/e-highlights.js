class EHighlights extends HTMLElement {
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
                
                .highlights {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 32px;
                    padding: 32px 16px 48px;
                }
                
                .highlights__item > h2 {
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--light-color);
                    margin-bottom: 20px;
                }
                
                .highlights__item > p {
                    color: var(--base-text-color)
                }
            </style>

            <section class="highlights">
                <div class="highlights__item">
                    <h2>Simple</h2>
                    <p>Created using HTML, CSS and JavaScript. No unnecessary libraries. Only native web components. Vite is used to build the project.</p>
                </div>
                <div class="highlights__item">
                    <h2>Reactive</h2>
                    <p>Truly reactive, all variables in the bean class are reactive. As well as a simple component rendering system based on the Shadow DOM.</p>
                </div>
                <div class="highlights__item">
                    <h2>Versatile</h2>
                    <p>A simple, incremental ecosystem that includes turnkey solutions and that scales between a library and a full-featured platform.</p>
                </div>
            </section>
        `;
    }
}

customElements.define('e-highlights', EHighlights);