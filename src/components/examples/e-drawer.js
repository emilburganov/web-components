import brushImageUrl from '/src/assets/images/drawer/brush.svg';
import eraserImageUrl from '/src/assets/images/drawer/eraser.svg';

class EDrawer extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    renderCanvas() {
        this.canvas = this.shadow.querySelector('.drawer__canvas');
        this.canvas.width = 800;

        if (this.isMobile()) {
            this.canvas.height = 800;
        } else {
            this.canvas.height = 400;
        }

        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = '3';
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#834EE8';

        this.x = this.y = null;
        this.isDrawing = false;

        this.createEvents();

        this.canvas.addEventListener('touchend', () => {
            console.log(this.isDrawing);
        })

        this.canvas.addEventListener('touchstart', () => {
            console.log(this.isDrawing);
        })

        this.canvas.addEventListener('touchmove', () => {
            console.log(this.isDrawing);
        })
    }

    selectBrush() {
        this.context.globalCompositeOperation = 'source-over';
        this.canvas.style.cursor = `url('${brushImageUrl}') 5 25, default`;
    }

    selectEraser() {
        this.canvas.style.cursor = `url('${eraserImageUrl}') 8 20, default`;
        this.context.globalCompositeOperation = 'destination-out';
    }

    resetCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    changeColor() {
        this.context.strokeStyle = this.colorInput.value;

        this.drawerSizeInput = this.shadow.querySelector('.drawer__size-input');
        this.drawerSizeInput.style.accentColor = this.colorInput.value;
    }

    changeSize() {
        this.context.lineWidth = this.sizeInput.value;
    }

    draw(event) {
        event.preventDefault();

        const canvasProperties = this.canvas.getBoundingClientRect();
        const canvasScale = this.canvas.width / canvasProperties.width;

        if (!this.x || !this.y || (!this.isDrawing && !this.isMobile())) {
            if (this.isMobile() && event.type === 'touchmove') {
                this.x = (event.touches[0].clientX - canvasProperties.left) * canvasScale;
                this.y = (event.touches[0].clientY - canvasProperties.top) * canvasScale;
            } else {
                this.x = event.offsetX * canvasScale;
                this.y = event.offsetY * canvasScale;
            }

            return;
        }

        if (this.isMobile() && event.type === 'touchmove') {
            this.currentX = (event.touches[0].clientX - canvasProperties.left) * canvasScale;
            this.currentY = (event.touches[0].clientY - canvasProperties.top) * canvasScale;
        } else {
            this.currentX = event.offsetX * canvasScale;
            this.currentY = event.offsetY * canvasScale;
        }

        this.context.beginPath();

        if (this.isDrawing === true) {
            this.context.moveTo(this.x, this.y);
        }
        else {
            this.isDrawing = true;
        }

        this.context.lineTo(this.currentX, this.currentY);
        this.context.stroke();

        this.x = this.currentX;
        this.y = this.currentY;
    }

    isMobile() {
        return 'ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/);
    }

    createEvents() {
        this.canvas.addEventListener('mousedown', () => this.isDrawing = true);
        this.canvas.addEventListener('mouseup', () => this.isDrawing = false);
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseout', () => this.isDrawing = false);
        this.canvas.addEventListener('touchend', () => this.isDrawing = false);
        this.canvas.addEventListener('touchmove', this.draw.bind(this));

        this.colorInput = this.shadow.querySelector('.drawer__color-input');
        this.colorInput.addEventListener('change', this.changeColor.bind(this));

        this.sizeInput = this.shadow.querySelector('.drawer__size-input');
        this.sizeInput.addEventListener('change', this.changeSize.bind(this));

        this.brushButton = this.shadow.querySelector('.drawer__brush-button');
        this.brushButton.addEventListener('click', this.selectBrush.bind(this));

        this.eraserButton = this.shadow.querySelector('.drawer__eraser-button');
        this.eraserButton.addEventListener('click', this.selectEraser.bind(this));

        this.resetButton = this.shadow.querySelector('.drawer__reset-button');
        this.resetButton.addEventListener('click', this.resetCanvas.bind(this));

        this.downloadButton = this.shadow.querySelector('.drawer__download-button');
        this.downloadButton.addEventListener('click', this.downloadImage.bind(this));
    }

    downloadImage() {
        const link = document.createElement('a');

        link.download = Date.now() + '.png';
        link.href = this.canvas.toDataURL();
        link.click();
    }

    connectedCallback() {
        this.render();
        this.renderCanvas();
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
                
                .drawer {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    padding: 16px 0;
                }
                
                .drawer__controls {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                
                .drawer__controls > div {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                
                .drawer__canvas {
                    width: 100%;
                    background-color: var(--light-color);
                    cursor: url("${brushImageUrl}") 5 25, default;
                }
                
                .drawer__color-input {
                    width: 35px;
                    height: 35px;
                    cursor: pointer;
                }
                
                .drawer__controls-group {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                
                .drawer__size-input {
                    accent-color: #834EE8;
                    cursor: pointer;
                }
          
                e-button > img {
                    width: 20px;
                    height: 20px;
                }
            </style> 
            
            <div class="drawer">
                <canvas class="drawer__canvas"></canvas>
                <div class="drawer__controls">
                    <div>
                        <div class="drawer__controls-group">
                            <input class="drawer__color-input" type="color" value="#834EE8">
                            <input class="drawer__size-input" type="range" min="1" max="50" value="3">
                        </div class="drawer__controls-group">
                        <div class="drawer__controls-group">
                            <e-button class="image-button drawer__brush-button">
                                <img src="${brushImageUrl}" alt="brush">
                                Brush
                            </e-button>
                            <e-button class="image-button drawer__eraser-button">
                                <img src="${eraserImageUrl}" alt="eraser">
                                Eraser
                            </e-button>
                        </div>
                    </div>
                    <div>
                        <e-button class="danger-button drawer__reset-button">Reset</e-button>
                        <e-button class="success-button drawer__download-button">Save</e-button>
                    </div>
                </div>
            </div> 
        `;
    }
}

customElements.define('e-drawer', EDrawer);