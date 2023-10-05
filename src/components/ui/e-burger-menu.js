class EBurgerMenu extends HTMLElement {
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
                
                .burger-menu {
                    position: relative;
                }
                
                .burger-menu__button > input[type="checkbox"] {
                    position: fixed;
                    width: 27px;
                    height: 27px;
                    cursor: pointer;
                    margin: 0;
                    z-index: 1;
                    opacity: 0;
                }
            
                .burger-menu__button {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 6px;
                    cursor: pointer;
                }
                
                .burger-menu__button > span {
                    width: 27px;
                    height: 3px;
                    background-color: var(--light-color);
                }
                
                .burger-menu__first-line {
                    transform-origin: 0 0;
                    transition: ease .4s;
                }

                .burger-menu__third-line {
                    transform-origin: 0 100%;
                    transition: ease .4s;
                }
                
                .burger-menu__button > input[type="checkbox"]:checked ~ .burger-menu__first-line {
                    transform: rotate(45deg);
                }
                
                .burger-menu__button > input[type="checkbox"]:checked ~ .burger-menu__second-line {
                    transform: scaleY(0);
                }
                
                .burger-menu__button > input[type="checkbox"]:checked ~ .burger-menu__third-line {
                    transform: rotate(-45deg);
                }
            </style>
            
            <div class="burger-menu">
                <div class="burger-menu__button">
                    <input class="burger-menu__checkbox" type="checkbox">
                    <span class="burger-menu__first-line"></span>
                    <span class="burger-menu__second-line"></span>
                    <span class="burger-menu__third-line"></span>
                </div>
            </div>
        `;
    }
}

customElements.define('e-burger-menu', EBurgerMenu);