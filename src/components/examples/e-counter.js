class ECounter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    get count() {
        return this.getAttribute('count');
    }

    set count(value) {
        this.setAttribute('count', value);
    }

    decrement() {
        this.count--;
    }

    increment() {
        this.count++;
    }

    static get observedAttributes() {
        return ['count'];
    }

    attributeChangedCallback(name) {
        if (name === 'count') {
            this.render();
            this.createEvents();
        }
    }

    createEvents() {
        this.decrementButton = this.shadow.getElementById('decrement-button');
        this.decrementButton.addEventListener('click', this.decrement.bind(this));

        this.incrementButton = this.shadow.getElementById('increment-button');
        this.incrementButton.addEventListener('click', this.increment.bind(this));
    }

    connectedCallback() {
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
                
                .counter {
                    max-width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                    background: -webkit-linear-gradient(315deg, var(--primary-color) 35%, var(--secondary-color));
                    padding: 32px;
                    border-radius: 8px;
                }
                
                .counter__container {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                
                .counter > h1 {
                    color: var(--light-color);
                    font-size: 1.8rem;
                    margin-bottom: 16px;
                }
                
                .counter__container > p {
                    text-align: center;
                    color: var(--light-color);
                    font-size: 1.6rem;
                    font-weight: 500;
                    min-width: 80px;
                }
            </style> 
            
            <div class="counter">
                <h1>Counter</h1>
                <div class="counter__container">
                    <e-button id="decrement-button">−</e-button>
                    <p>${this.count}</p>
                    <e-button id="increment-button">+</e-button>
                </div>
            </div> 
        `;
    }
}

customElements.define('e-counter', ECounter);