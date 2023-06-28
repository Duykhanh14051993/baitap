customElements.define("product-item1", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [];
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }
  
    connectedCallback() {
      this.renderHTML();
    }
  
    renderContainerCSS() {
      return `
       `;
    }
  
    renderStyle() {
      return `
        <style>
           
          
          .layout{
            background-color: black;
                width: 800px;
                height: 200px;
                display: flex;
                flex-direction: row;
                justify-contemt: center;
                color: white;
          }
          .layout img{
            width: 100px;
            height: 100px;
            border-radius: 10px;
          }
          .row1{    
            margin-left: 20px;
          }
          .name{
            margin-left: 10px;
    
          }

        </style>
        
      `
      ;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        
        <div class="layout">
            <div class="row1">
            <img src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg" alt="image1" class="image1" />
            <p class= "name">Huyden181</p>
            </div>
        </div> 
        <slot></slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    