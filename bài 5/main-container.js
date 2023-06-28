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
        .title{
            color: white;
            background-color: black;
            width: 800px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        </style>
        
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="title">
            <h1> Who's watching? </h1>
        </div>
        <slot>     
        </slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    