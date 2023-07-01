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
    
  