customElements.define("main-container", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [];
    }
    state = { width: 0 };
    setState = (newValue) => {
      this.state = Object.assign(this.state, newValue);
      this.renderHTML();
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
      `;
    }
  
    renderStyle() {
      return `
        <style>
          slot {
      background-color: #464d55;
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
          }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <slot></slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    