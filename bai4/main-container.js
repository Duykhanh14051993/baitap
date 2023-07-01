customElements.define("main-container", class extends HTMLElement {
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
      .container{
        background-color: black;
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
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
      <div class="container">
        </div>
        ${this.renderStyle()}
        <slot></slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    
  