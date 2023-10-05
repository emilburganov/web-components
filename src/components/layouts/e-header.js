class EHeader extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    toggleMenu() {
        this.headerMenu.classList.toggle('active');
    }

    toggleDropdown() {
        this.headerDropdownItem.classList.toggle('active');
    }

    createEvents() {
        this.headerDropdown = this.shadow.querySelector('.header__nav > span');
        this.headerDropdownItem = this.shadow.querySelector('.header__nav > div');
        this.headerMenu = this.shadow.querySelector('.header__menu');
        this.burgerMenu = this.shadow.querySelector('e-burger-menu');

        this.headerDropdown.addEventListener('click', this.toggleDropdown.bind(this));
        this.headerDropdownItem.addEventListener('click', this.toggleDropdown.bind(this));
        this.burgerMenu.addEventListener('click', this.toggleMenu.bind(this));
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
            
                a {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }
                
                header {
                    background-color: var(--base-background-color);
                    border-bottom: 1px solid var(--base-border-color);
                }
              
                .header__container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 16px;
                    padding: 0 16px
                }
                
                .header__logo {
                    font-size: 24px;
                    font-weight: 600;
                    color: var(--light-color);
                    padding: 16px 0;
                }
                
                .header__menu > div {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    color: var(--light-color);
                }
                
                .header__nav > span {
                    height: 48px;
                }
                
                .header__nav span, .header__menu a {
                    transition: ease color .4s;
                    cursor: pointer;
                }  
                
                .header__nav span:hover, .header__nav a:hover {       
                    color: var(--primary-color);
                }
                
                e-burger-menu {
                    display: none;
                }

                .header__dropdown {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                
                .header__dropdown > svg {
                    fill: var(--light-color);
                    transition: ease fill .4s;
                }
                         
                .header__dropdown:is(:hover) svg {
                    fill: var(--primary-color);
                }
                
                .header__dropdown-item {
                    min-width: 150px;
                    position: absolute;
                    top: 54px;
                    right: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    background-color: var(--base-background-color);
                    border: 1px solid var(--base-border-color);
                    border-radius: 8px;
                    padding: 16px;
                    opacity: 0;
                    pointer-events: none;
                }
                
                .header__dropdown-item > a {
                    font-size: 14px;
                }

                @media screen and (max-width: 768px)  {
                    e-burger-menu {
                        display: block;
                    }

                    .header__dropdown-item > a {
                        font-size: 16px;
                    }
                               
                    header .header__dropdown-item.active {
                        position: relative;
                        opacity: 1;
                        pointer-events: all;
                    }
                    
                    .header__nav > span {
                        height: auto;
                    }
                    
                    .header__menu > .header__nav {
                        display: none;
                        flex-direction: column;
                        align-items: baseline;
                        gap: 16px;
                        margin: 32px 0;
                    }
                    
                    .header__menu.active > .header__nav {
                        display: flex;
                    }
                   
                    .header__dropdown-item {
                        border: none;
                        top: 0;
                        right: 0;
                        padding: 0 16px;
                    }
                
                    .header__menu.active {
                        height: 100vh;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        padding: 18px 16px 36px 36px;
                        background-color: var(--base-background-color);
                        z-index: 1;
                    }
                    
                    .header__logo {
                        font-size: 22px;
                    }
                    
                    .header__logo {
                        padding: 16px 0;
                    }
                    
                    .header__container {
                        padding: 0 16px;
                    }
                }
                
                @media screen and (min-width: 769px) {
                    .header__nav span:hover ~ .header__dropdown-item, .header__dropdown-item:hover {
                        opacity: 1;  
                        pointer-events: all; 
                    }
                }
            </style>

            <header>
                <div class="header__container">
                    <a class="header__logo route" href="/">WebComponents.js</a>
                    <nav class="header__menu">
                        <e-burger-menu></e-burger-menu>
                        <div class="header__nav">
                            <a class="route" href="/">Home</a>
                            <a class="route" href="/about">About</a>
                            <a class="route" href="/documentation">Documentation</a>
                                <span class="route header__dropdown">
                                    Examples
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="14" height="14" focusable="false" viewBox="0 0 24 24" class="vt-flyout-button-text-icon"><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>
                                </span>
                                <div class="header__dropdown-item">
                                    <a class="route" href="/counter">Counter</a>
                                    <a class="route" href="/drawer">Drawer</a>
                                    <a class="route" href="/password-generator">Password Generator</a>
                                </div>
                        </div>
                    </nav>
                </div>
            </header> 
        `;
    }
}

customElements.define('e-header', EHeader);