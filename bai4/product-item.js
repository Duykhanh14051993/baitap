customElements.define("product-item", class extends HTMLElement {
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
      .item{
        background-color: darkgrey;
        width: calc( 20% - 40px );
        height: 180px;
        margin-left: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .link-youtube{
        background-color: chocolate;
        width: 100%;
        height: 90px;
        border-radius: 10px;
      }
      .content {
        margin-top: 5px;
        display: flex;
        flex-direction: row;
      }
      .logo{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: chocolate;
        margin-left: 2px;
      }
      .info{
        background-color: chocolate;
        width: 80%;
        height: 70px;
        margin-left: 5px;
      }
      `;
    }
  
    renderStyle() {
      return `
        <style>
          slot {
            
          }
          
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="item">
        <div class="link-youtube"></div>
        <div class="content">
        <div class="logo"></div>
        <div class="info"></div>
        </div>
      </div>
        <slot></slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    
  