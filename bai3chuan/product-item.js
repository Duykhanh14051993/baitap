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
    


     `;
  }

  renderStyle() {
    return `
      <style>
     
    .item{
        background-color: pink;
        width: calc(20% - 20px);
        height: 150px;
        margin: 20px;
    }
    .items{
      background-color: wheat;
      width: 100%;
      height: 200px;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
  }
      </style>
      
    `
    ;
  }

  renderHTML() {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <div class="items">
      <div class="item">
                <div class="image"></div>
                <div class="name"></div>
            </div>
      </div>      
      <slot></slot>
    `;
    this.shadow.innerHTML = html;
  }
});
  