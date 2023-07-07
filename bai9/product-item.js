customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ['name'];
    }
    attr (name){
      return this.getAttribute(name);
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
        
       .item{
        margin-top: 10px;
       }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <button>${this.attr('name')}</button>

      `;
      this.shadow.innerHTML = html;
    }
  });
    