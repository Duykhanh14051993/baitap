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
      box-sizing: border-box;
      width:100%;
      height:100vh;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      `;
    }
  
    renderStyle() {
      return `
        <style>
          slot {
            background-color: white;
            width: 100%;
            height: 70vh;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
        h2{
          background-color: white;  
          width: 100%;
          height: 30px;
          color: black;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
        }
       
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <h2>Trending launches</h2>
        <slot></slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    