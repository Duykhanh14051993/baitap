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
      .container-wrapper{
        background-color: black;
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
     } 
     
      `;
    }
  
    renderStyle() {
      return `
        <style>
        slot {
            width: 100%;
            background-color: pink;
            display: flex;
            flex-wrap: wrap;
            max-width: 1024px;
            justify-content: center;
            align-items: center;
          }
        h1{
            background-color: red;
            width: 100%;
            height: 50px;
            margin-top: 50px;
            color: white;
            text-align: center;
        }
        </style>
        
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="container-wrapper">
        <h1>Who's watching?</h1>
        
   </div>
        <slot>     
        </slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    