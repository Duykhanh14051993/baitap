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
      justify-content: center;
    `;
  }

  renderStyle() {
    return `
      <style>
      slot{
        background-color: black;
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    
      }
      h1{
        background-color: black;  
        width: 100%;
        height: 50px;
        color: white;
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
        <h1>Who's watching?</h1>
      <slot>     
      </slot>
    `;
    this.shadow.innerHTML = html;
  }
});
  